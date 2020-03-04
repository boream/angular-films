import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.scss']
})
export class ListFilmComponent implements OnInit {

  constructor(public filmService: FilmService) {
  }

  ngOnInit() {
  }

  eliminar(film) {
    if (window.confirm(`¿Seguro que quiere borrar la pelicula ${film.name}?`)) {
      this.filmService.removeFilm(film);
    }
  }

  saveFilm(film) {
    this.filmService.addFilm(film);
  }
}
