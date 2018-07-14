import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const loginRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: 'src/app/login/login.module#LoginModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(loginRoutes)], exports: [RouterModule]
})
export class AppRoutingModule { }
