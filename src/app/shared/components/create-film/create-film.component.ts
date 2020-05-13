import { Component, OnInit, ViewChild } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FilmFormReactiveComponent } from '../film-form-reactive/film-form-reactive.component';

@Component({
  selector: 'app-create-film',
  templateUrl: './create-film.component.html',
  styleUrls: ['./create-film.component.scss']
})
export class CreateFilmComponent implements OnInit {

  @ViewChild(FilmFormReactiveComponent, { static: true }) form;

  film: any;

  constructor(
    private filmService: FilmService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['_id']) {
        this.film = this.filmService.getFilm(params['_id']);
      }
    });

  }

  onSave(film) {
    if (film) {
      if (film.id) {
        // this.filmService.updateFilm(film);
        this.filmService.update(film).subscribe();
      } else {
        this.filmService.addFilm(film);
      }
    }
    this.router.navigate(['/film']);
  }

}
