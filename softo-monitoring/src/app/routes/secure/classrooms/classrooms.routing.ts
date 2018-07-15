import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClassroomsComponent } from './classrooms.component';

const classsroomsRoutes: Routes = [
  { path: '', component: ClassroomsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(classsroomsRoutes)], exports: [RouterModule]
})
export class ClassroomRoutingModule { }
