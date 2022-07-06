import { LoadingSpinnerComponent } from './shared/spinner/spinner.component';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService, LoadingService } from '@app/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  spinner: any;
  lang: any;
  isLoading$: any;
  constructor(
    private translate: TranslateService,
    public loadingService: LoadingService,
    private localStorageService: LocalStorageService
  ) {
    this.localStorageService.getItem('language');

    // this.lang =(this.localStorageService.getItem('language') !== undefined) ?
    //   JSON.parse(this.localStorageService.getItem('language')) : 'en';
    this.translate.setDefaultLang('vi');
    this.isLoading$ = this.loadingService.isLoading$.asObservable();
  }

  ngOnInit() {
    // this.router.events.subscribe(event => {
    //   if (event instanceof RouteConfigLoadEnd) {
    //     this.loadingService.setLoading(false);
    //   }
    // });
    this.spinner = LoadingSpinnerComponent;
  }
}
