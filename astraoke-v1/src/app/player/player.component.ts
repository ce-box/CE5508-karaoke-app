import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core'
import { Observable, Subscription } from 'rxjs'

import { Song } from '../models/song';
import { AccessInformationUserDTO } from './.././models/access';

import { PlayerService } from './player.service';
import { UsersService } from './../services/users.service';

@Component({
  selector: 'Player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnChanges {
  @Input() currentSong: Song;
  @Input() token: string = '';
  @Output() playSong = new EventEmitter<Song>();
  user: AccessInformationUserDTO = {
    _id: '',
    email: '',
    name: '',
    username: '',
    role: ''
  }
  public songTime: string = '';
  public delaySong: string = '0';
  public sonFile: string = "./../../assets/songs/dont-stop-believing/dont-stop-believing.lrc"
  public points: number = 0
  public lines: string[] = []
  public onLyricsTimeUpdate = new EventEmitter<number>()
  public currentTime: string;
  public onSpeechStart = new EventEmitter<boolean>()
  private readonly POINTS_MULTIPLIER = 5

  constructor(
    private PlayerService: PlayerService,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.usersService.getUserInformation(this.token)
    .subscribe(data => {
      this.user = data
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.PlayerService.hasPropertyChanged(changes.currentSong)) {
      this.resetPlayer()
    }
  }

  resetPlayer() {
    this.points = 0
    this.lines = []
  }

  handleAudioPlayPause(isPlaying: boolean) {
    this.onSpeechStart.emit(isPlaying)
  }

  handleAudioTimeUpdate = (time: number) => {
    this.onLyricsTimeUpdate.emit(time);
    this.currentTime = this.PlayerService.formatTime(time);
  }

  handleAudioTimeSong = (time: string) => {
    this.songTime = time;
  }

  handleLyricsNewLine = (line) => {
    // Keep up to last 5 lines in array
    this.lines = [line].concat(this.lines).slice(0, 5)
  }

  handleSpeechFound(text: string) {
    console.log('[speech match]: ', text)
    const matches = this.PlayerService.countMatches(text, this.lines)

    this.points += (matches * this.POINTS_MULTIPLIER)
  }

  handlePlaySong() {
    this.playSong.emit(null);
  }

}