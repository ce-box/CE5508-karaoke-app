import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Song } from '../../models/song';

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
  @Output() currentSongLoader = new EventEmitter<Song>();
  @Output() playSong = new EventEmitter<Song>();

  constructor() { }

  ngOnInit() {
    console.log(this.song);
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
