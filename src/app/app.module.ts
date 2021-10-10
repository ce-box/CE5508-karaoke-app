import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'
import {  FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlayerService } from './player/player.service';
import { SongsService } from './services/songs.service';
import { UsersService } from './services/users.service';
import { FileService } from './services/file.service'
import { AudioComponent } from './player/audio/audio.component';
import { LyricsComponent } from './player/lyrics/lyrics.component'
import { SpeechComponent } from './player/speech/speech.component'
import { RecognitionService } from './player/speech/recognition.service';
import { SongSelectionComponent } from './components/song-selection/song-selection.component';
import { LoaderSongComponent } from './components/loader-song/loader-song.component';
import { AccessComponent } from './components/access/access.component';
import { CreateSongComponent } from './components/create-song/create-song.component'

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    AudioComponent,
    LyricsComponent,
    SpeechComponent,
    SongSelectionComponent,
    LoaderSongComponent,
    AccessComponent,
    CreateSongComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    PlayerService,
    SongsService,
    UsersService,
    FileService,
    RecognitionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
