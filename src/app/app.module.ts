import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { NgModule, LOCALE_ID } from '@angular/core';
import { SlideshowModule } from 'ng-simple-slideshow';
import { RouterModule, Router, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ListFilmComponent } from './shared/components/list-film/list-film.component';
import { CreateFilmComponent } from './shared/components/create-film/create-film.component';
// import { FilmService } from './services/film.service';

registerLocaleData(localeEs, 'es-ES');

const appRoutes: Routes = [
  { path: 'film', component: ListFilmComponent },
  { path: 'create', component: CreateFilmComponent },
  {
    path: 'edit/:id',
    component: CreateFilmComponent
  },
  {
    path: '',
    redirectTo: '/film',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    SlideshowModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    // FilmService,
    // { provide: FilmService, useClass: FilmService},
    { provide: LOCALE_ID, useValue: 'es-ES' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
