import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './components/film/film.component';
import { MyShadowDirective } from './directives/my-shadow.directive';
import { CapitalizeFirstPipe } from './pipe/capitalize-first.pipe';



@NgModule({
  declarations: [
    FilmComponent,
    MyShadowDirective,
    CapitalizeFirstPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilmComponent,
    CapitalizeFirstPipe
  ]
})
export class SharedModule { }
