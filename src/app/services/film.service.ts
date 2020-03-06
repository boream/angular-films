import { Injectable, Inject } from '@angular/core';
import { SESSION_STORAGE, LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private _films = [
    {
      id: '0',
      name: 'spectre 007',
      gender: 'Aventura',
      // tslint:disable-next-line: max-line-length
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM2Nzg4MzkwOF5BMl5BanBnXkFtZTgwNzA0OTE3NjE@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdbUrl: 'http://www.imdb.com/title/tt2379713/'
    },
    {
      id: '1',
      name: 'badboys 3',
      gender: 'Aventura',
      // tslint:disable-next-line: max-line-length
      image: 'http://www.iralcine.com/img-peliculas/pelicula-bad-boys-for-life.jpg',
      imdbUrl: 'http://www.imdb.com/title/tt2379713/'
    },
    {
      id: '2',
      name: 'martin hache',
      gender: 'Romance',
      // tslint:disable-next-line: max-line-length
      image: 'http://www.iralcine.com/img-peliculas/pelicula-bad-boys-for-life.jpg',
      imdbUrl: 'http://www.imdb.com/title/tt2379713/'
    },
    {
      id: '3',
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

  addFilm(film) {
    const id = '' + this._films.length;
    const newFilm = Object.assign({}, film, { id });
    this._films.push(newFilm);
    this.storage.set('films', this._films);
  }

  updateFilm(film) {
    const index = this._films.findIndex(f => f.id === film.id);
    if (index > -1) {
      this._films.splice(index, 1, film);
      this.storage.set('films', this._films);
    }
  }

  getFilm(id) {
    return this._films.find((film) => film.id === id);
  }

}

