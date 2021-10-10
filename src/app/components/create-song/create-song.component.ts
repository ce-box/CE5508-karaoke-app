import { Component, OnInit } from '@angular/core';

import { FileService } from './../../services/file.service';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.scss']
})
export class CreateSongComponent implements OnInit {

  constructor(
    private fileService: FileService
  ) { }

  ngOnInit() {
  }

  onUpload(event: Event) {
    const element = event.target as HTMLInputElement;
    /* const file = element.files?.item(0);
    if (file) {
      this.fileService.uploadFile(file)
      .subscribe(rta => {

      });
    } */
  }

}
