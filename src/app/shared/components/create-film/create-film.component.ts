import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-film',
  templateUrl: './create-film.component.html',
  styleUrls: ['./create-film.component.scss']
})
export class CreateFilmComponent implements OnInit {

  film: any;

  constructor(
    private filmService: FilmService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    debugger
    this.activatedRoute.params.subscribe((params) => {
      debugger
      if (params['id']) {
        this.film = this.filmService.getFilm(params['id']);
      }
    });

  }

}
