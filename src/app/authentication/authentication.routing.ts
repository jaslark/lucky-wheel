import { Routes } from '@angular/router';
import { NotFoundComponent } from '@app/authentication/404/not-found.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '404',
        component: NotFoundComponent
      }
    ]
  }
];
