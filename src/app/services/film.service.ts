import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Film } from '../types/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private url = `${environment.backend}/api/v1/film`;

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

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService, private http: HttpClient) {
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

  updateFilm(film) {
    const index = this._films.findIndex(f => f.id === film.id);
    if (index > -1) {
      this._films.splice(index, 1, film);
      this.storage.set('films', this._films);
    }
  }

  getFilm(id): Observable<Film> {
    return this.http.get<Film>(`${this.url}/${id}`).pipe(
      map(film => Object.assign({}, film, { id: film._id }))
    );
  }

  getFilms(): Observable<any> {
    const url = `${this.url}`;
    return this.http.get(url).pipe(
      map((films: any[]) => films.map(film => Object.assign({}, film, { id: film._id })))
    );
  }

  update(film) {
    const url = `${this.url}/${film.id}`;
    return this.http.put(url, film);
  }

  addFilm(film) {
    return this.http.post(this.url, film);
  }

  removeFilm(film) {
    debugger
    // TODO esto no va en offline
    // this.storage.set('films', this._films);
    return this.http.delete(`${this.url}/${film.id}`);
  }

}

