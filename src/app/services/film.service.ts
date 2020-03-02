import { Injectable, Inject } from '@angular/core';
import { SESSION_STORAGE, LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable()
export class FilmService {

  private _films = [
    {
      name: 'spectre 007',
      gender: 'Aventura',
      // tslint:disable-next-line: max-line-length
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM2Nzg4MzkwOF5BMl5BanBnXkFtZTgwNzA0OTE3NjE@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdbUrl: 'http://www.imdb.com/title/tt2379713/'
    },
    {
      name: 'badboys 3',
      gender: 'Aventura',
      // tslint:disable-next-line: max-line-length
      image: 'http://www.iralcine.com/img-peliculas/pelicula-bad-boys-for-life.jpg',
      imdbUrl: 'http://www.imdb.com/title/tt2379713/'
    },
    {
      name: 'martin hache',
      gender: 'Romance',
      // tslint:disable-next-line: max-line-length
      image: 'http://www.iralcine.com/img-peliculas/pelicula-bad-boys-for-life.jpg',
      imdbUrl: 'http://www.imdb.com/title/tt2379713/'
    },
    {
      name: 'el lado oscuro del corazon',
      gender: 'Romance',
      // tslint:disable-next-line: max-line-length
      image: 'http://www.iralcine.com/img-peliculas/pelicula-bad-boys-for-life.jpg',
      imdbUrl: 'http://www.imdb.com/title/tt2379713/'
    }
  ];

  // public films = this._films;

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    if (!storage.get('films')) {
      storage.set('films', this._films);
    } else {
      this._films = storage.get('films');
    }
  }


  get films() {
    return this._films;
  }

  set films(films) {
    this._films = films;
  }

  removeFilm(film) {
    this._films = this._films.filter((data) => data.name !== film.name);
    this.storage.set('films', this._films);
  }

}

