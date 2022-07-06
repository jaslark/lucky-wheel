import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import * as Sentry from '@sentry/angular';
import { Integrations } from '@sentry/tracing';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  if (window) {
    window.console.log = function() {};
  }
  /**
   * To enable PWA Service worker uncomment this code
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('ngsw-worker.js');
    });
  }
   */
}
Sentry.init({
  dsn:
    'https://fa4999102e544161be762f944e6e5156@o707785.ingest.sentry.io/5780859',
  environment: environment.sentry
});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err: any) => console.log(err));
