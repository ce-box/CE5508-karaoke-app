import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecognitionService } from './recognition.service';

import { SpeechComponent } from './speech.component';

describe('SpeechComponent', () => {
  let component: SpeechComponent;
  let fixture: ComponentFixture<SpeechComponent>;
  let service;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechComponent ],
      providers: [RecognitionService],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = fixture.debugElement.injector.get(RecognitionService);
    spyOn(service,'getRecognition').and.callFake(()=> SpeechRecognition)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
