import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateFilmComponent } from '../shared/components/create-film/create-film.component';

@Injectable({
  providedIn: 'root'
})
export class SureExitGuard implements CanDeactivate<CreateFilmComponent> {
  canDeactivate(component: CreateFilmComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const result = window.confirm('¿ Esta seguro que quiere salir ?');
    if (result) {
      console.log(component.form);
      // mala practica
      component.form.formGroup.reset();
      // component.
    }

    return result;
  }

}
