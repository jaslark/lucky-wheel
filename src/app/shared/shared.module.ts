import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import { TopMenuComponent } from './layouts/top-menu/top-menu.component';
import { CallbackPipe } from './pipes/callback.pipe';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '@app/shared/breadcrumb/breadcrumb.component';
import { BlankComponent } from '@app/shared/layouts/blank/blank.component';
import { FullComponent } from '@app/shared/layouts/full/full.component';
import { SpinnerComponent } from '@app/shared/spinner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonLoaderComponent } from '@app/shared/button-loader';
import { FormErrorWrapperComponent } from '@app/shared/form-error-wrapper/form-error-wrapper.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { appTableDirective } from '@app/shared/directives/table.directive';
// import { ConfirmModalContent } from './modal/confirm.modal';
import { GoogleplaceDirective } from '@app/shared/directives/input-google-place.directive';
import { NumberDirective } from '@app/shared/directives/number.directive';
import { InputDateDirective } from './directives/input-date.directive';
import { ClickOutsideDirective } from './directives/clickOutSide.directive';
import { DateObjectPipe } from './pipes/date.pipe';
import { DateFormatPipe } from './pipes/dateFormat.pipe';
import { LocalStorageService } from '@app/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BreadcrumbsModule } from '@exalif/ngx-breadcrumbs';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { GlobalService } from '@app/core';

import * as AllIcons from '@ant-design/icons-angular/icons';

import { TranslateModule } from '@ngx-translate/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { QuicklinkModule } from 'ngx-quicklink';
import { LoadingProgressBarComponent } from './loading-progress-bar/loading-progress-bar.component';
import { LoadingSpinnerComponent } from './spinner/spinner.component';
import { StatusComponent } from './status/status.component';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  key => antDesignIcons[key]
);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NzMenuModule,
    NzDatePickerModule,
    NzDropDownModule,
    NzTableModule,
    NzCheckboxModule,
    NzPopoverModule,
    NzTabsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    BreadcrumbsModule.forRoot(),
    QuicklinkModule,
    NgScrollbarModule.withConfig({
      track: 'all',
      visibility: 'hover'
    }),
    TranslateModule
  ],
  declarations: [
    SpinnerComponent,
    LoadingProgressBarComponent,
    BreadcrumbComponent,
    BlankComponent,
    FullComponent,
    ButtonLoaderComponent,
    FormErrorWrapperComponent,
    appTableDirective,
    TopMenuComponent,
    GoogleplaceDirective,
    NumberDirective,
    InputDateDirective,
    ClickOutsideDirective,
    DateObjectPipe,
    DateFormatPipe,
    CallbackPipe,
    LoadingSpinnerComponent,
    StatusComponent
  ],
  exports: [
    SpinnerComponent,
    LoadingProgressBarComponent,
    BreadcrumbComponent,
    BlankComponent,
    FullComponent,
    ButtonLoaderComponent,
    FormErrorWrapperComponent,
    appTableDirective,
    // ConfirmModalContent,
    TopMenuComponent,
    GoogleplaceDirective,
    NumberDirective,
    InputDateDirective,
    ClickOutsideDirective,
    DateObjectPipe,
    DateFormatPipe,
    CallbackPipe,
    NzIconModule,
    NgScrollbarModule,
    QuicklinkModule,
    BreadcrumbsModule,
    LoadingSpinnerComponent,
    StatusComponent,
    NzDatePickerModule,
    NzTableModule,
    NzCheckboxModule,
    NzPopoverModule,
    NzTabsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule
  ],
  // entryComponents: [ConfirmModalContent],
  providers: [
    LocalStorageService,
    GlobalService,
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
