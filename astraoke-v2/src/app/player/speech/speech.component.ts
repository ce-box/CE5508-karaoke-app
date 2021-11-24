import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { merge, Subscription } from 'rxjs';
import { fromEvent } from 'rxjs';

import { map } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { distinct } from 'rxjs/operators';
import { timeout } from 'rxjs/operators';

import { RecognitionService } from './recognition.service'


@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.scss']
})
export class SpeechComponent implements OnInit {

  @Input() playPause = new EventEmitter<boolean>();
  @Output() onSpeechFound = new EventEmitter<string>();
  private subscriptions: Subscription[] = [];
  private recognition: any;
  public isAutoRestarting: boolean = false;
  public isRecording: boolean = false;

  constructor(private RecognitionService: RecognitionService) { }

  ngOnInit(): void {
    this.recognition = this.RecognitionService.getRecognition()
    const result$ = fromEvent(this.recognition, 'result')
    const start$ = fromEvent(this.recognition, 'start')
    const stop$ = fromEvent(this.recognition, 'stop')
    const end$ = fromEvent(this.recognition, 'end')
    const onStart = start$.subscribe(() => {
      // console.log('start')
      this.isRecording = true

      result$.pipe(
        timeout(5000)
      ).subscribe(() => {
        if (this.isRecording) {
          // console.log('timeout, restarting...')
          this.isAutoRestarting = true
          this.recognition.stop()
        }
      })
    })

    const onEnd = merge(stop$, end$).subscribe(() => {
      // console.log('stop or end?')
      if (this.isAutoRestarting) {
        this.isAutoRestarting = false
        this.recognition.start()
      } else {
        this.isRecording = false
      }
    })

    const onResult = result$.pipe(
      map((e: any) => e.results[e.results.length - 1]),
      filter((result: SpeechRecognitionResult) => result.isFinal),
      map((result: SpeechRecognitionResult) => result[0].transcript),
      distinct()
    ).subscribe((text: string) => {
        this.onSpeechFound.emit(text)
      })

    const onPlay = this.playPause
      .subscribe((isPlaying) => {
        if (isPlaying && !this.isRecording) {
          this.recognition.start()
        } else if (!isPlaying && this.isRecording) {
          this.recognition.stop()
        }
      })

    // So we can unsubscribe later
    this.subscriptions = this.subscriptions.concat([ onStart, onEnd, onResult, onPlay ])
  }

  ngOnDestroy() {
    this.recognition.stop()
    this.subscriptions.forEach((s) => s.unsubscribe())
  }

  handleToggle() {
    if (!this.isRecording) {
      this.recognition.start()
    } else {
      this.recognition.stop()
    }
  }

}
