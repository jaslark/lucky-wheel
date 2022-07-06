import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class GlobalService {
  getEventChangeLanguage$ = new BehaviorSubject<any>(null);

  setEventChangeLanguage(value: any) {
    this.getEventChangeLanguage$.next(value);
  }
}
