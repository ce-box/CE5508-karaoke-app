import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderSongComponent } from './loader-song.component';

describe('LoaderSongComponent', () => {
  let component: LoaderSongComponent;
  let fixture: ComponentFixture<LoaderSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
