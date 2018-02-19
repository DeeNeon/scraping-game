import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {BinComponent} from './bin/bin.component';
import {BombComponent} from './bomb/bomb.component';
import {TimerComponent} from './common/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    BombComponent,
    BinComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
