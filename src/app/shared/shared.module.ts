import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './components/film/film.component';
import { MyShadowDirective } from './directives/my-shadow.directive';
import { CapitalizeFirstPipe } from './pipe/capitalize-first.pipe';
import { FilmService } from '../services/film.service';



@NgModule({
  declarations: [
    FilmComponent,
    MyShadowDirective,
    CapitalizeFirstPipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    FilmService
  ],
  exports: [
    FilmComponent,
    CapitalizeFirstPipe
  ]
})
export class SharedModule { }
