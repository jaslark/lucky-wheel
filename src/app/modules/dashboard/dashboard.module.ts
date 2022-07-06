import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { ModalModule } from '@app/shared/modal/modal.module';
import { SharedModule } from '@app/shared';

import { DashboardRoutes } from '@app/modules/dashboard/dashboard.routing';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardService } from '@app/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { RegisterIdentiyComponent } from './home/register-identity/register-identity.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(DashboardRoutes),
    FontAwesomeModule,
    TreeViewModule,
    ModalModule,
    SharedModule,
    TranslateModule,
    NgSelectModule
  ],
  declarations: [RegisterIdentiyComponent, HomeComponent],
  providers: [DashboardService]
})
export class DashboardModule {}
