import {
  Component,
  Input,
  OnChanges,
  OnInit,
  AfterViewInit
} from '@angular/core';
import { Router } from '@angular/router';
import { ERROR_OBJECTS, ErrorMessageService } from '@app/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-form-error-wrapper',
  templateUrl: './form-error-wrapper.component.html'
})
export class FormErrorWrapperComponent
  implements OnInit, OnChanges, AfterViewInit {
  @Input()
  public control: any;
  @Input()
  public controlName: string;
  @Input()
  public apiErrorType?: string;
  // TODO : How to pass apiServiceUrl
  @Input()
  public apiServiceUrl?: string;

  @Input()
  noTranslate = false;

  public errorObject: Object = ERROR_OBJECTS;
  public errorKeys: string[];
  public apiErrorMessage: string;

  constructor(
    private errorMessageService: ErrorMessageService,
    public translate: TranslateService,
    public router: Router
  ) {
    errorMessageService.errors$.subscribe(
      (errors: ErrorModel.ErrorMessageObject[]) => {
        errors
          .filter(
            e => e.type === this.apiErrorType
            //  && e.serviceUrl == this.apiServiceUrl
          )
          .map(e => {
            this.apiErrorMessage = e.error;
          });
      }
    );
  }

  ngOnInit() {
    console.log(this.noTranslate);
  }

  ngOnChanges() {
    this.errorKeys = Object.keys(this.errorObject);
  }

  ngAfterViewInit() {
    this.control.valueChanges.subscribe(() => {
      this.apiErrorMessage = '';
    });
  }

  formateError(errorMessage: string, errorObj: any): string {
    const types = ['min', 'max', 'requiredLength'];
    types.forEach(type => {
      if (!!errorObj[type] && !(errorObj[type] instanceof Object)) {
        errorMessage = errorMessage.replace(/{{value}}/g, errorObj[type]); // Remove translate value
      }
    });
    return errorMessage.replace(
      /{{field}}/g,
      this.translate.instant(this.controlName)
    );
  }

  hasError() {
    return (
      (this.control.errors && this.control.touched) || this.apiErrorMessage
    );
  }
}
