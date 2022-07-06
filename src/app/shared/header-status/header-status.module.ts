import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderStatusComponent } from './header-status.component';

@NgModule({
  imports: [CommonModule, RouterModule, TranslateModule],
  declarations: [HeaderStatusComponent],
  exports: [HeaderStatusComponent]
})
export class HeaderStatusModule {}
