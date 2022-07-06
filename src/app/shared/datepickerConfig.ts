import { Injectable } from '@angular/core';
import {
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbDateStruct
} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Injectable()
export class NgbUTCStringAdapter extends NgbDateAdapter<string> {
  fromModel(date: string): NgbDateStruct {
    let dateObject = null;
    if (date) {
      dateObject = moment(date);
    }
    return date
      ? {
          day: dateObject.date(),
          month: dateObject.month() + 1,
          year: dateObject.year()
        }
      : null;
  }

  toModel(date: NgbDateStruct): string {
    return date
      ? date.year.toString() +
          '-' +
          String('00' + date.month).slice(-2) +
          '-' +
          String('00' + date.day).slice(-2)
      : null;
  }
}
