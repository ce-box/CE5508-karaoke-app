import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Song } from '../models/song';

@Injectable()
export class SongsService {

  private urlAPI: string = 'http://23.99.226.234:8000/api/v1/songs';
  private apiKEY: string = 'H8q9eSgR';

  constructor(
    private http: HttpClient
  ) { }

  getAllSongs() {
    return this.http.get<Song[]>(this.urlAPI, {
      headers: {
        "api": this.apiKEY
      }
    });
  }

  delete(_id: string) {
    return this.http.delete<Song>(`${this.urlAPI}/${_id}`);
  }
}
