import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const DashboardRoutes: Routes = [
  {
    path: 'play/:id',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  }
];
