import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

import { SongsService } from '../../services/songs.service';
import { UsersService } from './../../services/users.service';

import { Song } from '../../models/song';
import { AccessInformationUserDTO } from './../../models/access';

@Component({
  selector: 'song-selection',
  templateUrl: './song-selection.component.html',
  styleUrls: ['./song-selection.component.scss']
})
export class SongSelectionComponent implements OnInit {

  @Input() token: string = '';
  @Output() onChooseSong = new EventEmitter<Song>();
  songs: Song[] = [];
  filterSongs = '';
  user: AccessInformationUserDTO = {
    _id: '',
    email: '',
    name: '',
    username: '',
    role: ''
  }

  constructor(
    private songService: SongsService,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.songService.getAllSongs()
    .subscribe(data => {
      this.songs = data;
    });
    this.userService.getUserInformation(this.token)
    .subscribe(data => {
      this.user = data
    })
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

  handleNewSong(song: Song) {
    this.songs.push(song);
  }

}
