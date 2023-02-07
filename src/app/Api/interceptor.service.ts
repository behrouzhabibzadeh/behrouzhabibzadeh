import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Base } from '../base';
import { AuthService } from './auth.service';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {
  constructor(private authApi: AuthService, private base: Base) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log(req);
    var token = localStorage.getItem('token');
    var authRequsest = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });

    return next.handle(authRequsest).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.status === 201) {
          //  this.openSnackBar('ok 201', 1);
        }

        if (event instanceof HttpResponse && event.status === 200) {
          // this.openSnackBar('ok 200', 1);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        //  console.log(error.status);

        // this.openSnackBar(error.status.toString(), 2);

        // console.warn(HttpHeaderResponse);

        //TODO: uncomment
        if (error.status == 401) {
          // console.log('get 401');
          this.authApi.Logout();
        }

        // if (error.status == 0) {
        //   this.authApi.Logout();
        // }

        return throwError(error);
      })
    );
  }
}
