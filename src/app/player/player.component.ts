import { Component, OnInit, Input, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';

import { Song } from '../models/song';
import { AccessInformationUserDTO } from './.././models/access';
import { StatsDTO } from '../models/stats';

import { PlayerService } from './player.service';
import { UsersService } from './../services/users.service';
import { StatsService } from '../services/stats.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnChanges {

  @Input() currentSong: Song = {
    _id: '',
    name: '',
    artist: '',
    album: '',
    cover: '',
    url: '',
    lyrics: ''
  };
  @Input() token: string = '';
  @Output() playSong = new EventEmitter<Song|null>();

  user: AccessInformationUserDTO = {
    _id: '',
    email: '',
    name: '',
    username: '',
    role: ''
  }
  public songTime: string = '';
  public delaySong: string = '0';
  public points: number = 0
  public lines: string[] = []
  public onLyricsTimeUpdate = new EventEmitter<number>()
  public currentTime: string = '';
  public onSpeechStart = new EventEmitter<boolean>()
  private readonly POINTS_MULTIPLIER = 5

  constructor(
    private PlayerService: PlayerService,
    private usersService: UsersService,
    private statsService: StatsService
  ) { }

  ngOnInit(): void {
    this.usersService.getUserInformation(this.token)
    .subscribe(data => {
      this.user = data
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.PlayerService.hasPropertyChanged(changes.currentSong)) {
      this.resetPlayer();
    }
  }

  resetPlayer() {
    this.points = 0;
    this.lines = [];
  }

  handleAudioPlayPause(isPlaying: boolean) {
    this.onSpeechStart.emit(isPlaying)
    if ((this.currentTime === this.songTime) && (this.points !== 0) ) {
      const scoreStats: StatsDTO = {
        songId: this.currentSong._id,
        username: this.user.username,
        score: this.points
      }
      this.statsService.addStat(scoreStats, this.token)
      .subscribe(data => {
        console.log(data);
      })
      this.resetPlayer();
    }
  }

  handleAudioTimeUpdate = (time: number) => {
    this.onLyricsTimeUpdate.emit(time);
    this.currentTime = this.PlayerService.formatTime(time);
  }

  handleAudioTimeSong = (time: string) => {
    this.songTime = time;
  }

  handleLyricsNewLine = (line: string) => {
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
