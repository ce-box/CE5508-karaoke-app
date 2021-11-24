import { Component } from '@angular/core';
import { Song } from '../app/models/song';
import './natural';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'astraoke-v2';

  public OnCurrentSong: Song|null = null;
  public onPlaySong: Song|null = null;
  public token: string = '';

  constructor(
    ) {}

    ngOnInit() {
    }

    handleChooseSong(song: Song|null) {
      this.OnCurrentSong = song
    }

    handleClearCurrentSong() {
      this.OnCurrentSong = null
    }

    homeDirection(currentSong: Song|null) {
      this.OnCurrentSong = currentSong;
    }

    handlePlaySong(playSong: Song|null) {
      this.onPlaySong = playSong;
    }

    handleChooseToken(token: string) {
      this.token = token;
    }

}
