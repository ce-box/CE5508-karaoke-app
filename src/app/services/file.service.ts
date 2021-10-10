import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FileService {

  storageUrl: string = '';

  constructor(
    private http: HttpClient
  ) { }

  uploadFile(file: Blob) {
    const dto = new FormData();
    dto.append('file', file);
    return this.http.post<File>(`${this.storageUrl}/upload`, dto, {
      /* headers: {
        'Content-type': "multipart/form-data"
      } */
    });
  }

}

