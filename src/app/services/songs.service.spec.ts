import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';
import { Song } from '../models/song';


import { SongsService } from './songs.service';
const listSong: Song[]= [{
  _id: 'd',
  album: 'd',
  cover: 'd',
  name: 'd',
  url: 'd',
  artist: '3',
  lyrics: '2'
},{
  _id: 'd',
  album: 'd',
  cover: 'd',
  name: 'd',
  url: 'd',
  artist: '3',
  lyrics: '2'
}]
describe('SongsService', () => {
  let service: SongsService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SongsService
      ],
      imports: [
        HttpClientTestingModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    });
  });
  beforeEach(()=>{
    service = TestBed.get(SongsService);
    httpMock = TestBed.get(HttpTestingController)

  })
  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('getAllSongs return list of songs', ()=>{
    service.getAllSongs().subscribe((resp: Song[])=>{
      expect(resp).toEqual(listSong);
    });
    const req = httpMock.expectOne('http://23.99.226.234:8000/api/songs');
    expect(req.request.method).toBe('GET');
    req.flush(listSong);
  });
  it('deleteSong', ()=>{
    const req = httpMock.expectOne('http://23.99.226.234:8000/api/songs/01');
    expect(req.request.method).toBe('DELETE');
    req.flush(listSong);
  });

  
});
