import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'dateObj' })
export class DateObjectPipe implements PipeTransform {
  transform(value: any): any {
    return this.toDateObject(value);
  }
  toDateObject(date: any) {
    if (!date) {
      return null;
    }
    const dateObject = moment(date);
    return {
      day: dateObject.date(),
      month: dateObject.month() + 1,
      year: dateObject.year()
    };
  }
}
