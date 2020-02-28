import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './components/film/film.component';
import { MyShadowDirective } from './directives/my-shadow.directive';



@NgModule({
  declarations: [
    FilmComponent,
    MyShadowDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilmComponent
  ]
})
export class SharedModule { }
