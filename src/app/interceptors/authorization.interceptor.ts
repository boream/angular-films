import { Injectable, Inject } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';
import { environment } from '../../environments/environment';


/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        const apiUrl = `${environment.backend}/api`;
        // hace falta Authorization
        if (req.url.startsWith(apiUrl)) {
            const token = this.storage.get('film-token');
            // Clone the request and replace the original headers with
            // cloned headers, updated with the authorization.
            const authReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
            });
            return next.handle(authReq);
        }
        // No hace falta Authorization
        return next.handle(req);
    }
}
