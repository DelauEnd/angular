import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, tap, first  } from 'rxjs/operators';

import { from, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  refreshPath = '/';

  constructor(private auth: AuthService) {
    this.refreshPath = environment.authServerUrl + "/api/Authentication/refresh?refreshToken=";
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(request.url.indexOf(this.refreshPath) !== -1)
      return next.handle(request);

    if (this.auth.isAuthenticated())
    {
      this.auth.refresh()?.pipe(first( )).toPromise()
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.token}`
        }
      })     
      return next.handle(request);
    }
    return next.handle(request); //TODO: add endsession redirect
  }
}

