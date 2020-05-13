import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { NgModule, LOCALE_ID } from '@angular/core';
import { SlideshowModule } from 'ng-simple-slideshow';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AuthorizationInterceptor } from './interceptors/authorization.interceptor';

registerLocaleData(localeEs, 'es-ES');

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    SlideshowModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-ES' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
