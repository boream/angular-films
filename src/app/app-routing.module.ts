import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { ListFilmComponent } from './shared/components/list-film/list-film.component';
import { CanActivateGuard } from './guards/can-activate.guard';
import { CreateFilmComponent } from './shared/components/create-film/create-film.component';
import { SureExitGuard } from './guards/sure-exit.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'film',
    component: ListFilmComponent,
    canActivate: [CanActivateGuard]
  },
  {
    path: 'create',
    component: CreateFilmComponent,
    canActivate: [CanActivateGuard],
    canDeactivate: [SureExitGuard]
  },
  {
    path: 'edit/:id',
    component: CreateFilmComponent,
    canActivate: [CanActivateGuard],
    canDeactivate: [SureExitGuard]
  },
  {
    path: '',
    redirectTo: '/film',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    canActivate: [CanActivateGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
