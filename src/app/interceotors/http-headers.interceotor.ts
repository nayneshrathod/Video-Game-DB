import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        // 'x-rapidapi-key ': 'esGbwrm390mshS2BCl0RALxQRtZTp1W7sFMjsnyJlJzDXVks0H',
        // 'x-rapid-host': 'rawg-video-games-database.p.rapidapi.com',


	"x-rapidapi-key": "6f6f59c252mshaf54907f5c95571p11ad9ejsn4d90c5d7c916",
	"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
    // "useQueryString": true
       },
      setParams: {
        key: 'e40e743af2c94b0c916a8aa618fb4473',
      }
    });
    return next.handle(req);
  }
}
