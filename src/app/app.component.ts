import { Component } from '@angular/core';
import { Song } from '../app/models/song'
import './natural'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public OnCurrentSong: Song;
  public onPlaySong: Song;

  constructor(
  ) {}

  ngOnInit() {
  }

  handleChooseSong(song: Song) {
    this.OnCurrentSong = song
  }

  handleClearCurrentSong() {
    this.OnCurrentSong = null
  }

  homeDirection(currentSong: Song) {
    this.OnCurrentSong = currentSong;
  }

  handlePlaySong(playSong: Song) {
    this.onPlaySong = playSong;
  }
}
