import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FilmFormReactiveComponent } from '../film-form-reactive/film-form-reactive.component';
import { Subscription, Observable, from, empty } from 'rxjs';
import { Film } from 'src/app/types/film';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-create-film',
  templateUrl: './create-film.component.html',
  styleUrls: ['./create-film.component.scss']
})
export class CreateFilmComponent implements OnInit, OnDestroy {

  @ViewChild(FilmFormReactiveComponent, { static: true }) form;

  film: Film;
  film$: Observable<Film>;

  private subscriptions: Subscription[] = [];

  constructor(
    private filmService: FilmService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.film$ = this.activatedRoute.params.pipe(
      switchMap(params => {
        if (params['id']) {
          return this.filmService.getFilm(params['id'])
        }
        return empty();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onSave(film) {
    if (film) {
      debugger
      if (film.id) {
        this.filmService.update(film).subscribe(() => {
          this.router.navigate(['/film']);
        }, this.onSaveError);
      } else {
        this.filmService.addFilm(film).subscribe(() => {
          this.router.navigate(['/film']);
        }, this.onSaveError);
      }
    }
  }

  onSaveError(err) {
    if (err.status === 422) {
      alert('Error al salvar, revise campos')
    } else {
      alert('Error en el servicio')
    }
  }

}
