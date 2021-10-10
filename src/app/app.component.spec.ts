import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Song } from './models/song';


const listSong : Song = {
  _id: 'd',
  name: '3',
  artist: 'd',
  album: 'd',
  cover: 's',
  url: 's',
  lyrics: ''
}
describe('AppComponent', () => {
  let component : AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() =>{
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    }).compileComponents();
  });
  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
  });
  it('should create', ()=>{
    expect(component).toBeTruthy()
  })
  it('handleChooseSong', () =>{
    const spy1 = spyOn(component, 'handleChooseSong');
    component.handleChooseSong(listSong);
    expect(spy1).toHaveBeenCalled();
    expect(component.OnCurrentSong).not.toBeNull()
  });
});
