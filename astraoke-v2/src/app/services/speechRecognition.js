
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechRecognitionService {

  constructor() {}

  getRecognition() {
    if (SpeechRecognitionService.recognition) {
      return SpeechRecognitionService.recognition;
    }

    const recognition = new (window['SpeechRecognition'] || window['webkitSpeechRecognition'] || window['mozSpeechRecognition'] || window['msSpeechRecognition'])();
    recognition.continuous = true;
    recognition.interimResults = true;

    return recognition
  }
}
