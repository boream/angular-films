import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.scss']
})
export class ListFilmComponent implements OnInit, OnDestroy {

  films = [];
  films$: Observable<Array<any>>;

  subscription: Subscription;

  constructor(public filmService: FilmService) {
  }

  ngOnInit() {
    this.films$ = this.filmService.getFilms();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  eliminar(film) {
    if (window.confirm(`¿Seguro que quiere borrar la pelicula ${film.name}?`)) {
      debugger
      this.filmService.removeFilm(film).subscribe(
        res => {
          this.films$ = this.filmService.getFilms();
        },
        err => {
          alert('No hay sido posible eliminar la película')
        }
      );
    }
  }

  saveFilm(film) {
    this.filmService.addFilm(film);
  }
}
