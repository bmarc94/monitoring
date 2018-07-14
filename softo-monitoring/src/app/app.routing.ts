import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SECURE_ROUTES } from './routes/secure/secure.routes';
import { PUBLIC_ROUTES } from './routes/public/public.route';

import { SecureLayoutComponent } from './core/components/layouts/secure-layout/secure-layout.component';


const loginRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', children: [...PUBLIC_ROUTES] },
  { path: '', component: SecureLayoutComponent, children: [...SECURE_ROUTES] },
];

@NgModule({
  imports: [RouterModule.forRoot(loginRoutes)], exports: [RouterModule]
})
export class AppRoutingModule { }



// const APP_ROUTES: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full', },
//   { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
//   { path: '', component: SecureComponent, canActivate: [Guard], data: { title: 'Secure Views' }, children: SECURE_ROUTES }
// ];
