import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {
  isLoading$ = new BehaviorSubject<boolean>(false);
  bodyElement = window.document.querySelector('body');

  constructor() {}

  public setLoading(value: boolean) {
    this.isLoading$.next(value);
    if (value) {
      this.bodyElement.style.overflow = 'hidden';
    } else {
      this.bodyElement.style.overflow = '';
    }
  }

  public getLoading() {
    return this.isLoading$.asObservable();
  }
}
