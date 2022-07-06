import { Directive, HostListener, OnInit, Input } from '@angular/core';
import { NgControl, NgModel } from '@angular/forms';
import * as _ from 'lodash';
import * as moment from 'moment';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: `[inputDateDirective]`,
  providers: [NgModel]
})
export class InputDateDirective implements OnInit {
  private _fromDate: any;
  private _toDate: any;
  private _currentDate: any;
  @Input() set currentDate(value: any) {
    this._currentDate =
      value !== null ? moment(new Date(value), 'YYYY-MM-DD') : null;
  }

  @Input() set toDate(value: any) {
    this._toDate =
      value !== null ? moment(new Date(value), 'YYYY-MM-DD') : null;
  }

  @Input() set fromDate(value: any) {
    this._fromDate =
      value !== null ? moment(new Date(value), 'YYYY-MM-DD') : null;
  }
  regexStr =
    '^(0[1-9]|1[012]|[1-9]{1,1})[/](0[1-9]|[12][0-9]|3[01]|[1-9]{1,1})[/][0-9]{1,4}$';
  characterAllowInput = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '/',
    '-',
    'Enter',
    'Tab'
  ];
  constructor(private formControl: NgControl) {}

  @HostListener('blur', ['$event'])
  onBlur($event: any) {
    const event = $event.target.value;
    // const regEx = new RegExp(this.regexStr);
    // if (!regEx.test(event)) {
    //   console.log('temp', event);
    //   this.formControl.control.setValue(null);
    //   return;
    // }
    const valueOfDate = moment(new Date(event), 'YYYY-MM-DD');

    // Check condition and set value for to date
    if (this._fromDate) {
      if (valueOfDate.isBefore(this._fromDate)) {
        this.formControl.control.setValue(this._fromDate.format('YYYY-MM-DD'));
      }
    }

    if (this._toDate) {
      if (valueOfDate.isAfter(this._toDate)) {
        this.formControl.control.setValue(this._toDate.format('YYYY-MM-DD'));
      }
    }
  }

  @HostListener('input', ['$event'])
  onInputChange() {}

  @HostListener('paste', ['$event'])
  onPaste(event: any) {
    event.preventDefault();
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: any) {
    const e = event;
    if (
      [46, 8, 27].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode === 65 && e.ctrlKey === true) ||
      // Allow: Ctrl+C
      (e.keyCode === 67 && e.ctrlKey === true) ||
      // Allow: Ctrl+X
      (e.keyCode === 88 && e.ctrlKey === true) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)
    ) {
      // let it happen, don't do anything
      return;
    }
    if (this.characterAllowInput.indexOf(e.key) === -1) {
      e.preventDefault();
    }
  }

  ngOnInit() {}
}
