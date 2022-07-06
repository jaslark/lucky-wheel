import { Routes } from '@angular/router';

import { BlankComponent, FullComponent } from '@app/shared';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/404',
        pathMatch: 'full'
      },
      {
        path: 'wheel',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            m => m.DashboardModule
          ),
        data: {
          breadcrumbs: 'Dashboard'
        }
      }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./authentication/authentication.module').then(
            m => m.AuthenticationModule
          )
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];
