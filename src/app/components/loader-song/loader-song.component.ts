import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Song } from '../../songs/song.interface';

@Component({
  selector: 'app-loader-song',
  templateUrl: './loader-song.component.html',
  styleUrls: ['./loader-song.component.scss']
})
export class LoaderSongComponent implements OnInit {

  @Input() song: Song = {
    artist: ' ',
    title: ' ',
    lyrics: ' ',
    audio: ' ',
    lyricDelay: 0
  };
  @Output() currentSongLoader = new EventEmitter<Song>();

  constructor() { }

  ngOnInit() {
    console.log(this.song);
  }

  handleClearCurrentSong() {
    this.currentSongLoader.emit(null)
  }

}
