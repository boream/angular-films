import { Component } from '@angular/core';
import { FilmService } from './services/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  modalIsVisible = false;

  createRoute = '/create';


  title = 'films';

  constructor(public filmService: FilmService) {
  }

  eliminar(film) {
    if (window.confirm(`¿Seguro que quiere borrar la pelicula ${film.name}?`)) {
      this.filmService.removeFilm(film);
    }
  }

  toggleModal() {
    this.modalIsVisible = !this.modalIsVisible;
  }

  nuevaFecha() {
    return new Date();
  }

  saveFilm(film) {
    this.filmService.addFilm(film);
  }
}
