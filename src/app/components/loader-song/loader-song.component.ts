import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Song } from '../../models/song';
import { AccessInformationUserDTO } from './../../models/access';
import { Stats, Wiki } from 'src/app/models/stats';

import { UsersService } from './../../services/users.service';
import { StatsService } from '../../services/stats.service';

@Component({
  selector: 'app-loader-song',
  templateUrl: './loader-song.component.html',
  styleUrls: ['./loader-song.component.scss']
})
export class LoaderSongComponent implements OnInit {

  @Input() song: Song = {
    _id: '',
    name: '',
    artist: '',
    album: '',
    cover: '',
    url: '',
    lyrics: '',
  };
  @Input() token: string = '';
  @Output() currentSongLoader = new EventEmitter<Song|null>();
  @Output() playSong = new EventEmitter<Song|null>();
  user: AccessInformationUserDTO = {
    _id: '',
    email: '',
    name: '',
    username: '',
    role: ''
  };
  stats: Stats[] = [];
  artistWiki: Wiki = {
    about: [],
    genres: '',
    name: ''
  };

  constructor(
    private usersService: UsersService,
    private statsService: StatsService
    ) { }

  ngOnInit(): void {
    this.usersService.getUserInformation(this.token)
    .subscribe(data => {
      this.user = data
    })
    this.statsService.getStats(this.song._id, this.token)
    .subscribe(statsdata => {
      this.stats = statsdata;
      console.log(this.stats);
    })
    this.statsService.getWiki(this.song.artist, this.token)
    .subscribe(wiki => {
      this.artistWiki = wiki;
      console.log(this.artistWiki);
    })
  }

  handleClearCurrentSong() {
    this.currentSongLoader.emit(null);
    this.playSong.emit(null);
  }

  handlePlaySong() {
    this.currentSongLoader.emit(null);
    this.playSong.emit(this.song);
  }

}
