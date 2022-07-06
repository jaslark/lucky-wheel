import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

/**
 * Prefixes all requests with `environment.serverUrl`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  constructor() {}
  private WHITELIST = [
    '/assets/i18n/en.json',
    '/assets/i18n/fr.json',
    '/assets/i18n/vi.json'
  ];
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.WHITELIST.indexOf(request.url) === -1) {
      request = request.clone({
        url: environment.serverUrl + request.url
      });
    } else {
      request = request.clone({
        url: environment.adminUrl + request.url
      });
    }
    return next.handle(request);
  }
}
