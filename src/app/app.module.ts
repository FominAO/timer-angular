import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSliderModule} from '@angular/material'
import { AppComponent } from './app.component';
import { Ticking } from './ticking/ticking.directive';

@NgModule({
  declarations: [
    AppComponent,
    Ticking
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
