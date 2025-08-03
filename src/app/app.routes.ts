import { Routes } from '@angular/router';
import { LoginPage } from './Shared/Components/login-page/login-page';
import { PageNotFound } from './Shared/Components/page-not-found/page-not-found';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: '**',
    component: PageNotFound,
  },
];
