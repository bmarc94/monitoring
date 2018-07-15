import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimetablesComponent } from './timetables.component';

const timetablesRoutes: Routes = [
  { path: '', component: TimetablesComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(timetablesRoutes)], exports: [RouterModule]
})
export class TimetablesRoutingModule { }
