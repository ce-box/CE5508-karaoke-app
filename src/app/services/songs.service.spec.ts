import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { SongsService } from './songs.service';

describe('SongsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SongsService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([SongsService], (service: SongsService) => {
    expect(service).toBeTruthy();
  }));
});
