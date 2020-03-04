import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {SlideshowModule} from 'ng-simple-slideshow';
// import { FilmService } from './services/film.service';

registerLocaleData(localeEs, 'es-ES');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    SlideshowModule
  ],
  providers: [
    // FilmService,
    // { provide: FilmService, useClass: FilmService},
    { provide: LOCALE_ID, useValue: 'es-ES' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
