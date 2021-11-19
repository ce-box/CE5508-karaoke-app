import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  uploadFileCover(file: Blob) {
    const dto = new FormData();
    const name: string = "image";
    dto.append("image", file);
    dto.append("fieldname", name);
    return this.http.post<string>(
      "http://23.99.226.234:8000/api/v1/files/upload/image",
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
      "http://23.99.226.234:8000/api/v1/files/upload/audio",
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
      "http://23.99.226.234:8000/api/v1/files/upload/lyric",
      dto,
      {}
    );
  }
}
