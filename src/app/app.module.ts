import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlayerService } from './player/player.service';
import { SongsService } from './services/songs.service'
import { AudioComponent } from './player/audio/audio.component';
import { LyricsComponent } from './player/lyrics/lyrics.component'
import { SpeechComponent } from './player/speech/speech.component'
import { RecognitionService } from './player/speech/recognition.service';
import { SongSelectionComponent } from './components/song-selection/song-selection.component';
import { LoaderSongComponent } from './components/loader-song/loader-song.component'

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    AudioComponent,
    LyricsComponent,
    SpeechComponent,
    SongSelectionComponent,
    LoaderSongComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PlayerService,
    SongsService,
    RecognitionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
