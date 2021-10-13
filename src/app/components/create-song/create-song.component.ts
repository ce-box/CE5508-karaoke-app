import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FileService } from './../../services/file.service';
import { SongsService } from './../../services/songs.service'

import { Song, SongDTO } from './../../models/song';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.scss']
})
export class CreateSongComponent implements OnInit {

  @Output() onChooseSong = new EventEmitter<Song>();

  newSong: SongDTO = {
    name: '',
    album: '',
    artist: '',
    cover: '',
    lyrics: '',
    url: ''
  }

  constructor(
    private fileService: FileService,
    private songsService: SongsService
  ) { }

  ngOnInit() {
  }

  onUploadSong(event: Event) {
    const element = event.target as HTMLInputElement;
    const file = element.files.item(0);
    if (file) {
      this.fileService.uploadFileSong(file)
      .subscribe(rta => {
        console.log(rta);
        this.newSong.url = rta;
      });
    }
  }

  onUploadLyric(event: Event) {
    const element = event.target as HTMLInputElement;
    const file = element.files.item(0);
    if (file) {
      this.fileService.uploadFileLyric(file)
      .subscribe(rta => {
        console.log(rta);
        this.newSong.lyrics = rta;
      });
    }
  }

  onUploadCover(event: Event) {
    const element = event.target as HTMLInputElement;
    const file = element.files.item(0);
    if (file) {
      this.fileService.uploadFileCover(file)
      .subscribe(rta => {
        console.log(rta);
        this.newSong.cover = rta;
      });
    }
  }

  onCreate() {
    this.songsService.addSong(this.newSong).subscribe(response => {
      console.log(response);
      this.onChooseSong.emit(response);
    })

  }

}
