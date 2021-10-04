import { Component } from '@angular/core';
import { Song } from '../app/models/song'
import './natural'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public currentSong: Song

  constructor(
  ) {}

  ngOnInit() {
  }

  handleChooseSong(song: Song) {
    this.currentSong = song
  }

  handleClearCurrentSong() {
    this.currentSong = null
  }

  homeDirection(currentSong: Song) {
    this.currentSong = currentSong;
  }
}
