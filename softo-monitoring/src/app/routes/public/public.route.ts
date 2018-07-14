import { Routes } from '@angular/router';


export const PUBLIC_ROUTES: Routes = [
  { path: 'login', loadChildren: 'src/app/routes/public/login/login.module#LoginModule' }
];
