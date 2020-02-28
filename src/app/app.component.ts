import { Component, OnInit, OnDestroy, DoCheck} from '@angular/core';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck, OnDestroy {

  ngOnInit() {
    console.log("Lanzamos el init de la app");
  }

  ngDoCheck() {
    console.log("Lanzamos el docheck de la app");
  }
    
  ngOnDestroy() {
    console.log("Destruimos la app");
  }

  title = 'films';
  films = [
    {
      name: 'Spectre 007',
      gender: 'Aventura',
      // tslint:disable-next-line: max-line-length
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM2Nzg4MzkwOF5BMl5BanBnXkFtZTgwNzA0OTE3NjE@._V1_UX182_CR0,0,182,268_AL_.jpg',
      imdbUrl: 'http://www.imdb.com/title/tt2379713/'
    },
    {
      name: 'Badboys 3',
      gender: 'Aventura',
      // tslint:disable-next-line: max-line-length
      image: 'http://www.iralcine.com/img-peliculas/pelicula-bad-boys-for-life.jpg',
      imdbUrl: 'http://www.imdb.com/title/tt2379713/'
    },
    {
      name: 'Martin Hache',
      gender: 'Romance',
      // tslint:disable-next-line: max-line-length
      image: 'http://www.iralcine.com/img-peliculas/pelicula-bad-boys-for-life.jpg',
      imdbUrl: 'http://www.imdb.com/title/tt2379713/'
    },
    {
      name: 'El lado oscuro del corazon',
      gender: 'Romance',
      // tslint:disable-next-line: max-line-length
      image: 'http://www.iralcine.com/img-peliculas/pelicula-bad-boys-for-life.jpg',
      imdbUrl: 'http://www.imdb.com/title/tt2379713/'
    }
  ];

  eliminar(event) {
    this.modalIsVisible = true;
    const index = this.films.findIndex(film => film.name === event.name);
    if (index > -1) {
      this.films.splice(index, 1)
    }
  }

  toggleModal() {
    this.modalIsVisible = !this.modalIsVisible;
  }
}
