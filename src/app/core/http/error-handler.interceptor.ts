import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '@app/core/local-storage.service';
import { ErrorMessageService } from '@app/core/service';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

const credentialsKey = 'credentials';

/**
 * Adds a default error handler to all requests.
 */
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private errorMessageService: ErrorMessageService,
    public toastr: ToastrService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(catchError(error => this.errorHandler(error)));
  }

  // Customize the default error handler here if needed
  private errorHandler(
    response: HttpResponse<any>
  ): Observable<HttpEvent<any>> {
    if (response.status === 401) {
      const errorResponse: any = response;
      this.toastr.error(errorResponse['error']['message']);
      this.localStorageService.clearItem(credentialsKey);
      // this.router.navigate(['/login'], {
      //   replaceUrl: true
      // });
    } else if (response.status === 400) {
      const errorResponse: any = response;
      if (errorResponse.error) {
        if (errorResponse.error.validation) {
          errorResponse.error.validation.keys.forEach((key: string) => {
            this.errorMessageService.set(
              errorResponse.error.validation.errors[key],
              key,
              response.url
            );
          });
        } else {
          this.errorMessageService.set(
            errorResponse.error.error,
            '_GLOBAL_',
            response.url
          );
        }
      }
    } else if (response.status === 403) {
      const errorResponse: any = response;
      this.toastr.error(
        (errorResponse['error']['message'] || '').split('\\n').join('<br>')
      );
    }

    if (!environment.production) {
      // Do something with the error
      // console.log(response.body);
      // this.toastr.error(response.body.error.error.message);
      console.error('Request error', response);
    }
    throw response;
  }
}
