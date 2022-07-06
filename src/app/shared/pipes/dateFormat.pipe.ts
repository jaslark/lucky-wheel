import { LocalStorageService } from '@app/core/local-storage.service';
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'dateValue' })
export class DateFormatPipe implements PipeTransform {
  dateFormat: string;
  constructor(localStorageService: LocalStorageService) {
    this.dateFormat =
      (localStorageService.getItem('credentials') &&
        JSON.parse(localStorageService.getItem('credentials')).data.config
          .format_date) ||
      'DD/MM/YYYY';
  }

  transform(value: any, formatTime?: any): any {
    if (!value) {
      return null;
    }
    const dateObject = moment(value);
    if (formatTime) {
      return dateObject.format(`${this.dateFormat} HH:mm`);
    } else {
      return dateObject.format(this.dateFormat);
    }
  }
}
