import { Routes } from '@angular/router';
import { LoginPage } from './Shared/Components/login-page/login-page';
import { PageNotFound } from './Shared/Components/page-not-found/page-not-found';
import { Clincs } from './Modules/Staff-Managment/pages/clincs/clincs';

export const routes: Routes = [
  {
    path: 'clincs',
    component: Clincs,
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: '**',
    component: PageNotFound,
  },
];
