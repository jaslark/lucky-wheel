import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm.modal.html'
})
// tslint:disable-next-line:component-class-suffix
export class ConfirmModalContent implements AfterViewInit {
  @Input() message: any;
  @Input() yesButtonText: any;
  @Input() noButtonText: any;
  @ViewChild('okButton') okButton: any;
  constructor(public activeModal: NgbActiveModal) {}

  ngAfterViewInit() {
    this.okButton.nativeElement.focus();
  }
}
