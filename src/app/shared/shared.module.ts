import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './components/film/film.component';
import { MyShadowDirective } from './directives/my-shadow.directive';
import { CapitalizeFirstPipe } from './pipe/capitalize-first.pipe';
import { FilmService } from '../services/film.service';
import { FilmFormComponent } from './components/film-form/film-form.component';
import { FilmFormReactiveComponent } from './components/film-form-reactive/film-form-reactive.component';



@NgModule({
  declarations: [
    FilmComponent,
    MyShadowDirective,
    CapitalizeFirstPipe,
    FilmFormComponent,
    FilmFormReactiveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FilmComponent,
    FilmFormComponent,
    FilmFormReactiveComponent,
    CapitalizeFirstPipe
  ]
})
export class SharedModule { }
