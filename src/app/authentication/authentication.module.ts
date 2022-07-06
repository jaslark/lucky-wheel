import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotFoundComponent } from '@app/authentication/404/not-found.component';
import { AuthenticationRoutes } from '@app/authentication/authentication.routing';
import { SharedModule } from '@app/shared';
import { PermissionService } from '@app/core/service/permission.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    SharedModule,
    FontAwesomeModule,
    RouterModule.forChild(AuthenticationRoutes),
    TranslateModule
  ],
  declarations: [NotFoundComponent],
  providers: [PermissionService]
})
export class AuthenticationModule {}
