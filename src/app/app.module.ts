import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSliderModule, MatInputModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material'
import { AppComponent } from './app.component';
import { Ticking } from './ticking/ticking.directive';
import { TickDirectiveDirective } from './tick-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    Ticking,
    TickDirectiveDirective
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
