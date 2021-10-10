import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
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
  artist: 'Journey',
  title: 'Never Gonna Give You Up',
  audio: 'assets/songs/never-gonna-give-you-up/never-gonna-give-you-up.mp3',
  lyrics: 'assets/songs/never-gonna-give-you-up/never-gonna-give-you-up.lrc',
  lyricDelay: 1,
}]
describe('SongsService component', () => {
  let service: SongsService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SongsService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    });
  });
  beforeEach(()=>{
    service = TestBed.get(SongsService);
    httpMock = TestBed.get(HttpTestingController);
  })
  xit('should ts be created',() => {
    expect(service).toBeTruthy();
  });

  it('getSongList returns value', ()=> {
    const SongValue = service.getSongList();
    expect(SongValue).not.toBeNull();
    expect(SongValue).toEqual(listSong);
  })

});
