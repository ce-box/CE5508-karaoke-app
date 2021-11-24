import { Injectable } from '@angular/core';

declare var SpeechRecognition: any;
declare var webkitSpeechRecognition: any;
declare var mozSpeechRecognition: any;
declare var msSpeechRecognition: any;

@Injectable({
  providedIn: 'root'
})
export class RecognitionService {

  private static recognition: any;

  constructor() { }

  getRecognition() {
    if (RecognitionService.recognition) {
      return RecognitionService.recognition
    }

    const recognition = new (SpeechRecognition || webkitSpeechRecognition || mozSpeechRecognition || msSpeechRecognition
      )()
    recognition.continuos = true;
    recognition.interimResults = true;
  }
}
