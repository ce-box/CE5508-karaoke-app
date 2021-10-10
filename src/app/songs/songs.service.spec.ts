import { TestBed, inject } from '@angular/core/testing';
import { Song } from './song.interface';
import { SongsService } from './songs.service';

const listSong: Song[]= [{
  artist: 'Rick Astley',
  title: 'Never Gonna Give You Up',
  audio: 'assets/songs/never-gonna-give-you-up/never-gonna-give-you-up.mp3',
  lyrics: 'assets/songs/never-gonna-give-you-up/never-gonna-give-you-up.lrc',
  lyricDelay: 1,
},{
  artist: 'Rick Astley',
  title: 'Never Gonna Give You Up',
  audio: 'assets/songs/never-gonna-give-you-up/never-gonna-give-you-up.mp3',
  lyrics: 'assets/songs/never-gonna-give-you-up/never-gonna-give-you-up.lrc',
  lyricDelay: 1,
}]
describe('SongsService component', () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SongsService]
    });
  });

  it('should ts be created', inject([SongsService], (service: SongsService) => {
    expect(service).toBeTruthy();
  }));

});
