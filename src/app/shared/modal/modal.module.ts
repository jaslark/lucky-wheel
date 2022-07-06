import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfirmModalContent } from './confirm.modal';
import { TranslateModule } from '@ngx-translate/core';

//  Modal

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [ConfirmModalContent],
  providers: [],
  exports: [ConfirmModalContent]
})
export class ModalModule {}
