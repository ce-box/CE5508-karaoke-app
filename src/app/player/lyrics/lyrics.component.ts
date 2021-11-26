import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { PlayerService } from '../player.service';

import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { LyricLRC, Line } from '../../models/lyric-lrc'

import { Lrc } from 'lrc-kit'

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss']
})
export class LyricsComponent implements OnInit, OnDestroy, OnChanges {

  @Input() src: string = ''
  @Input() delay: string = '0';
  @Input() onCurrentTimeUpdate = new EventEmitter<number>();
  @Output() onLoad = new EventEmitter()
  @Output() onNewLine = new EventEmitter<string>()
  private timeSubscription: Subscription = new Subscription;
  public lyrics: LyricLRC = {
    ar: '',
    lines: [],
    ti: ''
  }
  public currentLineIndex: number = -1
  public lines: Line[] = []

  constructor(
    private service: PlayerService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loadLyrics(this.src)
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.service.hasPropertyChanged(changes.src)) {
      this.loadLyrics(changes.src.currentValue)
    }
  }

  ngOnDestroy() {
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe()
    }
  }

  loadLyrics(src: string) {
    const type: string = 'application/lrc'
    this.http.get(src, {responseType: 'blob'}, )
    .pipe(
      tap(content => {
        const blob = new Blob([content], {type});
      })
    ).subscribe(response => {
      const blob = new Blob([response], {type});
      blob.text().then(content => {
        this.processLyrics(content)
        this.timeSubscription = this.onCurrentTimeUpdate.subscribe(this.handleUpdateTime)
      })
    }
    )
  }

  processLyrics(lrcText: string) {
    const lrc = Lrc.parse(lrcText);
    console.log(lrc.info);
    console.log(lrc.lyrics);
    this.lyrics = {
      ar: lrc.info[0],
      ti: lrc.info[2],
      lines: lrc.lyrics
    }
    this.currentLineIndex = -1
    this.lines = []
    this.onLoad.emit()
  }

  handleUpdateTime = (currentTime: number) => {
    this.getCurrentLine(currentTime)
  }

  getCurrentLine = (currentTime: number) => {
    currentTime += Number(this.delay)
    const { lines } = this.lyrics
    const lineIndex = lines.findIndex((line) => (line.timestamp >= currentTime))
    const previousLine = lines[this.currentLineIndex]
    const nextLine = lines[lineIndex]
    const currentLineIndex = (lineIndex - 1)
    const currentLine = (lineIndex > 0)
      ? lines[currentLineIndex]
      : null


    if (currentLine && currentLine !== previousLine) {
      this.currentLineIndex = currentLineIndex
      this.onNewLine.emit(currentLine.content)

      if (!this.lines.length) {
        this.lines.push({ index: currentLineIndex, text: currentLine.content })
      }

      if (nextLine) {
        const lines = this.lines.concat([ { index: lineIndex, text: nextLine.content } ])

        if (lines.length >= 4) {
          lines.shift()
        }

        this.lines = lines
      }
    }
  }

}
