import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeachersComponent } from './teachers.component';



const teachersRoutes: Routes = [
  { path: '', component: TeachersComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(teachersRoutes)], exports: [RouterModule]
})
export class TeachersRoutingModule { }
