import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultSongs = [];
    for (const song of value) {
      if ((song.name.toLowerCase().indexOf(arg.toLowerCase()) > -1)   ||
          (song.artist.toLowerCase().indexOf(arg.toLowerCase()) > -1) ||
          (song.album.toLowerCase().indexOf(arg.toLowerCase()) > -1)) {
        resultSongs.push(song)
      };
    };
    return resultSongs;
  }

}
