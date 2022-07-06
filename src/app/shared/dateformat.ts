import { Injectable } from '@angular/core';
import { LocalStorageService } from '@app/core/local-storage.service';
import {
  NgbDateParserFormatter,
  NgbDateStruct
} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

export function toInteger(value: any): number {
  return parseInt(`${value}`, 10);
}

export function toString(value: any): string {
  return value !== undefined && value !== null ? `${value}` : '';
}

export function getValueInRange(value: number, max: number, min = 0): number {
  return Math.max(Math.min(value, max), min);
}

export function isString(value: any): value is string {
  return typeof value === 'string';
}

export function isNumber(value: any): value is number {
  return !isNaN(toInteger(value));
}

export function isInteger(value: any): value is number {
  return (
    typeof value === 'number' && isFinite(value) && Math.floor(value) === value
  );
}

export function isDefined(value: any): boolean {
  return value !== undefined && value !== null;
}

export function padNumber(value: number) {
  if (isNumber(value)) {
    return `0${value}`.slice(-2);
  } else {
    return '';
  }
}

export function regExpEscape(text: any) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

export function hasClassName(element: any, className: string): boolean {
  return (
    element &&
    element.className &&
    element.className.split &&
    element.className.split(/\s+/).indexOf(className) >= 0
  );
}

@Injectable()
export class NgbDateCustomParserFormatter extends NgbDateParserFormatter {
  constructor(private localStorageService: LocalStorageService) {
    super();
  }
  parse(value: string): NgbDateStruct {
    if (value) {
      value = moment(value).format('DD/MM/YYYY');
      const dateParts = value.trim().split('/');
      if (dateParts.length === 1 && isNumber(dateParts[0])) {
        return { day: toInteger(dateParts[0]), month: null, year: null };
      } else if (
        dateParts.length === 2 &&
        isNumber(dateParts[0]) &&
        isNumber(dateParts[1])
      ) {
        return {
          day: toInteger(dateParts[0]),
          month: toInteger(dateParts[1]),
          year: null
        };
      } else if (
        dateParts.length === 3 &&
        isNumber(dateParts[0]) &&
        isNumber(dateParts[1]) &&
        isNumber(dateParts[2])
      ) {
        return {
          day: toInteger(dateParts[0]),
          month: toInteger(dateParts[1]),
          year: toInteger(dateParts[2])
        };
      }
    }
    return null;
  }
  getFormat() {
    const dateFormat =
      (this.localStorageService.getItem('credentials') &&
        JSON.parse(this.localStorageService.getItem('credentials')).data.config
          .format_date) ||
      'DD/MM/YYYY';
    return dateFormat;
  }

  format(date: NgbDateStruct): string {
    let format_date;
    // return date
    if (date) {
      if (this.getFormat() === 'DD/MM/YYYY') {
        format_date = `${isNumber(date.day) ? padNumber(date.day) : ''}/${
          isNumber(date.month) ? padNumber(date.month) : ''
        }/${date.year}`;
      } else {
        format_date = `${isNumber(date.month) ? padNumber(date.month) : ''}/${
          isNumber(date.day) ? padNumber(date.day) : ''
        }/${date.year}`;
      }
    } else {
      format_date = '';
    }
    return format_date;
  }
}
