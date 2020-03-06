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
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CanActivateGuard } from './guards/can-activate.guard';
import { SureExitGuard } from './guards/sure-exit.guard';
// import { FilmService } from './services/film.service';

registerLocaleData(localeEs, 'es-ES');

const appRoutes: Routes = [
  {
    path: 'film',
    component: ListFilmComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: 'create',
    component: CreateFilmComponent,
    canActivate: [CanActivateGuard],
    canDeactivate: [SureExitGuard]
  },
  {
    path: 'edit/:id',
    component: CreateFilmComponent,
    canActivate: [CanActivateGuard],
    canDeactivate: [SureExitGuard]
  },
  {
    path: '',
    redirectTo: '/film',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    canActivate: [CanActivateGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
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
