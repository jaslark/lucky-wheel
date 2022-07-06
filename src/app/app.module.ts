import * as $ from 'jquery';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutes } from '@app/app.routing';
import { AppComponent } from '@app/app.component';
import {
  CoreModule,
  GlobalService,
  LoadingService,
  LocalStorageService
} from '@app/core';
import { SharedModule } from '@app/shared';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { Router } from '@angular/router';
// import ngx-translate and the http loader
import {
  TranslateLoader,
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import ng-http-loader for showing spinner
import { NgHttpLoaderModule } from 'ng-http-loader';
// import ngx-chips
import { TagInputModule } from 'ngx-chips';
import { QuicklinkStrategy, QuicklinkModule } from 'ngx-quicklink';

// sentry
import * as Sentry from '@sentry/angular';
import { Integrations } from '@sentry/tracing';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { Breadcrumb, BreadcrumbsConfig } from '@exalif/ngx-breadcrumbs';
registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    NgbModule,
    QuicklinkModule,
    RouterModule.forRoot(AppRoutes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy'
    }),
    CoreModule,
    SharedModule,
    FontAwesomeModule,
    TagInputModule,
    ToastrModule.forRoot({
      autoDismiss: true,
      preventDuplicates: true,
      closeButton: true,
      enableHtml: true
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  bootstrap: [AppComponent],
  providers: [LoadingService, { provide: NZ_I18N, useValue: en_US }]
})
export class AppModule {
  lang = '';

  constructor(
    breadcrumbsConfig: BreadcrumbsConfig,
    translate: TranslateService,
    private globalService: GlobalService,
    private localStorageService: LocalStorageService
  ) {
    breadcrumbsConfig.postProcess = (breadcrumbs): Breadcrumb[] => {
      this.lang =
        JSON.parse(this.localStorageService.getItem('language')) || 'en';

      this.globalService.getEventChangeLanguage$.subscribe(res => {
        if (res && res.language) {
          return breadcrumbs.map((item: Breadcrumb) => {
            item.text = translate.instant(item.text);
            return item;
          });
        }
      });
      this.globalService.setEventChangeLanguage({ language: '' });
      return breadcrumbs.map((item: Breadcrumb) => {
        item.text =
          this.lang === 'en' ? item.text : translate.instant(item.text);
        return item;
      });
    };
  }
}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
