import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FilterPipe } from './pipes/filter.pipe';
import { AccessComponent } from './components/access/access.component';
import { CreateSongComponent } from './components/create-song/create-song.component';
import { LoaderSongComponent } from './components/loader-song/loader-song.component';
import { SongSelectionComponent } from './components/song-selection/song-selection.component';
import { AudioComponent } from './player/audio/audio.component';
import { LyricsComponent } from './player/lyrics/lyrics.component';
import { SpeechComponent } from './player/speech/speech.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    AccessComponent,
    CreateSongComponent,
    LoaderSongComponent,
    SongSelectionComponent,
    AudioComponent,
    LyricsComponent,
    SpeechComponent,
    PlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
