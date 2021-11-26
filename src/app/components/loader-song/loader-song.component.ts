import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Song } from '../../models/song';
import { AccessInformationUserDTO } from './../../models/access';

import { UsersService } from './../../services/users.service';

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

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUserInformation(this.token)
    .subscribe(data => {
      this.user = data
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
