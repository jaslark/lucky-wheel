import { CurrencyPipe, DecimalPipe } from '@angular/common';
import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { NgControl, NgModel } from '@angular/forms';

import * as _ from 'lodash';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: `[numberDirective]`,
  providers: [NgModel, DecimalPipe, CurrencyPipe]
})
export class NumberDirective implements OnInit {
  _max: any;
  _min: any;
  _init = false;
  runInItValueOnInit = true;
  public regexStr = '^[0-9]*$';
  private characterAllowInput = [
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
    '.',
    'Delete',
    'Backspace'
  ];
  @Output() changeValue = new EventEmitter();

  @Input() isDecimal: any;
  @Input() charNumber = 2;
  @Input() set max(value: any) {
    this._max =
      value >= 0 ? _.round(value, this.charNumber) : Number.POSITIVE_INFINITY;
  }

  @Input() set min(value: any) {
    this._min = value || 0;
  }

  private countEnterDot = 0;

  constructor(
    private decimalPipe: DecimalPipe,
    private element: ElementRef,
    private ngModel: NgModel,
    private formControl: NgControl,
    private cp: CurrencyPipe
  ) {}

  @HostListener('focus', ['$event'])
  onFocus() {
    if (this.element.nativeElement) {
      this.element.nativeElement.select();
    }
  }

  @HostListener('blur', ['$event'])
  onBlur($event: any) {
    const event = $event.target.value;
    if (!Number(event) && Number(event) !== 0) {
      this.ngModel.viewToModelUpdate(Number(event) || 0);
      this.ngModel.valueAccessor.writeValue(Number(event) || 0);
      _.isNumber(event)
        ? this.changeValue.emit(Number(event))
        : this.changeValue.emit(Number(0));
    } else {
      const value = this.isDecimal
        ? this.decimalPipe.transform(
            _.round(parseFloat('0' + event), this.charNumber),
            `1.${this.charNumber}-${this.charNumber}`
          )
        : Number(event);
      const number_change = value.toString().replace(/,/g, '');
      this.ngModel.valueAccessor.writeValue(number_change || 0);
      this.changeValue.emit(Number(number_change));
    }
  }

  @HostListener('input', ['$event'])
  onInputChange($event: any) {
    this._init = true;
    const event = $event.target.value;

    if (event !== '' && event !== null && event !== 'undefined') {
      let value =
        event >= this._max ? this._max : event <= this._min ? this._min : event;
      const decimal = String(value).split('.');
      if (decimal[1] && decimal[1].length > this.charNumber) {
        value = decimal[0] + '.' + decimal[1].substr(0, this.charNumber);
      }
      if (event !== value && event !== '0.0') {
        this.ngModel.viewToModelUpdate(value);
        this.ngModel.valueAccessor.writeValue(value);
      }
      this.changeValue.emit(value);
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: any) {
    const e = event;
    const selected = getSelection().toString();
    if (this.characterAllowInput.indexOf(e.key) >= 0) {
      this.runInItValueOnInit = false;
    }
    if (
      [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode === 65 && e.ctrlKey === true) ||
      // Allow: Ctrl+C
      (e.keyCode === 67 && e.ctrlKey === true) ||
      // Allow: Ctrl+V
      (e.keyCode === 86 && e.ctrlKey === true) ||
      // Allow: Ctrl+X
      (e.keyCode === 88 && e.ctrlKey === true) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)
    ) {
      // let it happen, don't do anything
      return;
    }
    const current: string =
      this.element.nativeElement.value === ''
        ? e.key
        : this.element.nativeElement.value;

    const regEx = new RegExp(this.regexStr);
    if (
      !regEx.test(current) ||
      e.keyCode === 69 ||
      (e.key === '.' && !this.isDecimal) ||
      (this._min >= 0 && e.key === '-')
    ) {
      e.preventDefault();
      return;
    }

    // Check when user enter a number such as: 1..1, 1.1.
    if (e.key === '.') {
      this.countEnterDot += 1;
    } else {
      this.countEnterDot = 0;
    }

    if (
      this.countEnterDot > 1 ||
      (this.element.nativeElement.value.indexOf('.') !== -1 && e.key === '.')
    ) {
      e.preventDefault();
    }
  }

  initFormControlValue(data: any) {
    if (_.isNumber(data) && !this._init && this.isDecimal) {
      const value = this.decimalPipe.transform(
        _.round(+this.formControl.value, this.charNumber),
        `1.${this.charNumber}-${this.charNumber}`
      );
      this.formControl.control.setValue(value.toString().replace(/,/g, ''));
      this._init = true;
    }
  }

  ngOnInit() {
    this.regexStr = this.isDecimal
      ? `^[0-9]+[.]?[0-9]{0,${this.charNumber}}$`
      : this.regexStr;
    this.ngModel.valueChanges.subscribe(data => {
      if (data !== null && this.isDecimal && this.runInItValueOnInit) {
        if (data === undefined) {
          data = 0;
        }
        const value = this.decimalPipe.transform(
          _.round(+data, this.charNumber),
          `1.${this.charNumber}-${this.charNumber}`
        );
        if (value) {
          this.ngModel.valueAccessor.writeValue(
            value.toString().replace(/,/g, '')
          );
        }
        this._init = true;
      }
      this.runInItValueOnInit = true;
    });

    // Change init value
    this.formControl.valueChanges.subscribe(data => {
      this.initFormControlValue(data);
    });
    this.initFormControlValue(this.formControl.value);
  }
}
