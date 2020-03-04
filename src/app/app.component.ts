import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { FilmService } from './services/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck, OnDestroy {

  modalIsVisible = false;


  title = 'films';

  constructor(public filmService: FilmService) {
  }

  ngOnInit() {
    console.log("Lanzamos el init de la app");
  }

  ngDoCheck() {
    console.log("Lanzamos el docheck de la app");
  }

  ngOnDestroy() {
    console.log("Destruimos la app");
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
