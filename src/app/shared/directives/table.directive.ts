import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output
} from '@angular/core';
declare var jQuery: any;

@Directive({
  selector: '[appTableDirective]',
  providers: [],
  exportAs: 'appTableDirective'
})
// tslint:disable-next-line:class-name
export class appTableDirective implements OnDestroy {
  constructor(public element: ElementRef) {}
  private _selectedIndex: any;
  private _collection: any;
  @Output() selectedIndexChange: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onEnter: EventEmitter<any> = new EventEmitter<any>();

  @Input() set collection(value: any) {
    this._collection = value;
    const newValue = value.length;
    this.selectedIndex > newValue - 1
      ? (this.selectedIndex = newValue - 1)
      : (this.selectedIndex = 0);
  }

  @Input() set selectedIndex(value: any) {
    this._selectedIndex = value;
  }

  ngOnDestroy() {}

  scrollToTable(selector?: any) {
    try {
      const top = this.element.nativeElement.offsetTop - 100;
      jQuery(selector || 'html, body, .table-responsive').animate(
        {
          scrollTop: top
        },
        500
      );
    } catch (e) {
      console.log(e);
    }
  }
  scrollToBottom(selector?: any) {
    try {
      const bottom = 1000;
      jQuery(selector || 'html, body, .table-responsive').animate(
        {
          scrollTop: bottom
        },
        500
      );
    } catch (e) {
      console.log(e);
    }
  }

  focusElement() {
    const button =
      (this.element.nativeElement.querySelectorAll('tr td:first-child a') &&
        this.element.nativeElement.querySelectorAll('tr td:first-child a')[
          this._selectedIndex
        ]) ||
      (this.element.nativeElement.querySelectorAll(
        'tr td:first-child button'
      ) &&
        this.element.nativeElement.querySelectorAll('tr td:first-child button')[
          this._selectedIndex
        ]) ||
      (this.element.nativeElement.querySelectorAll(
        'tr td:last-child a:first-child'
      ) &&
        this.element.nativeElement.querySelectorAll(
          'tr td:last-child a:first-child'
        )[this._selectedIndex]);

    if (button) {
      button.focus();
    }
  }

  scrollTableToTop() {
    try {
      let table = document.querySelector('.table-responsive');
      if (table) {
        table.scrollTo(0, 0);
      }

      table = document.querySelector('.table-responsive');
      if (table) {
        table.scrollTo(0, 0);
      }
    } catch (e) {
      console.log(e);
    }
  }
}
