import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import azureStorage = require("azure-storage");
import { Readable } from "stream";

@Injectable()
export class FileService {
  storageUrl: string = "";
  azureStorage = require("azure-storage");
  blobService = azureStorage.createBlobService(
    "gabustorage",
    "RPmvCwZWHOSFh02Kv7E6P0oIo3gO1caiKbXZD4bLqpaBFzcyjyWl3/dg+T1l7pnURB75LBP9+L+TYrJIeb8hgQ=="
  );
  containerName = "archivo";

  constructor(private http: HttpClient) {}

  bufferToStream(binary) {
    const readableInstanceStream = new Readable({
      read() {
        this.push(binary);
        this.push(null);
      },
    });

    return readableInstanceStream;
  }

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
