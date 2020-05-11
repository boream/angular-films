import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './components/film/film.component';
import { MyShadowDirective } from './directives/my-shadow.directive';
import { CapitalizeFirstPipe } from './pipe/capitalize-first.pipe';
import { FilmFormComponent } from './components/film-form/film-form.component';
import { FilmFormReactiveComponent } from './components/film-form-reactive/film-form-reactive.component';
import { ListFilmComponent } from './components/list-film/list-film.component';
import { CreateFilmComponent } from './components/create-film/create-film.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FilmComponent,
    MyShadowDirective,
    CapitalizeFirstPipe,
    FilmFormComponent,
    FilmFormReactiveComponent,
    ListFilmComponent,
    CreateFilmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    FilmComponent,
    FilmFormComponent,
    FilmFormReactiveComponent,
    CapitalizeFirstPipe,
    ListFilmComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
