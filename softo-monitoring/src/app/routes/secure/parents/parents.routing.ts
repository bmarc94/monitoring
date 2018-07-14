import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParentsComponent } from './parents.component';


const parentsRoutes: Routes = [
  { path: '', component: ParentsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(parentsRoutes)], exports: [RouterModule]
})
export class ParentsRoutingModule { }
