import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

import { SongsService } from '../../services/songs.service'

import { Song } from '../../models/song'

@Component({
  selector: 'song-selection',
  templateUrl: './song-selection.component.html',
  styleUrls: ['./song-selection.component.scss']
})
export class SongSelectionComponent implements OnInit {

  @Output() onChooseSong = new EventEmitter<Song>();
  songs: Song[] = [];

  constructor(
    private songService: SongsService
  ) { }

  ngOnInit() {
    this.songService.getAllSongs()
    .subscribe(data => {
      this.songs = data;
    });
  }

  handleChooseSong($event, song: Song) {
    $event.preventDefault()
    this.onChooseSong.emit(song)
  }

  onDeleteSong(id: string) {
    this.songService.delete(id)
    .subscribe(() => {
      const songIndex = this.songs.findIndex(item => item._id === id);
      this.songs.splice(songIndex, 1);
    })
  }

}
