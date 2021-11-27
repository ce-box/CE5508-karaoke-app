import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { constants } from '../const';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private readonly urlAPI: string = `${constants.URL}api/v1/files/`;
  constructor(private http: HttpClient) { }

  uploadFileCover(file: Blob) {
    const dto = new FormData();
    const name: string = "image";
    dto.append("image", file);
    dto.append("fieldname", name);
    return this.http.post<string>(
      `${this.urlAPI}upload/image`,
      dto,
      {}
    );
  }

  uploadFileSong(file: Blob) {
    const dto = new FormData();
    const name: string = "audio";
    dto.append("audio", file);
    dto.append("fieldname", name);
    return this.http.post<string>(
      `${this.urlAPI}upload/audio`,
      dto,
      {}
    );
  }

  uploadFileLyric(file: Blob) {
    const dto = new FormData();
    const name: string = "lyric";
    dto.append("lyric", file);
    dto.append("fieldname", name);
    return this.http.post<string>(
      `${this.urlAPI}upload/lyric`,
      dto,
      {}
    );
  }
}
