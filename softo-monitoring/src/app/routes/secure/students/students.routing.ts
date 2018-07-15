import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentsSearchComponent } from './search/students-search.component';
import { StudentsCreateComponent } from './create/students-create.component';
import { StudentsComponent } from './students.component';

const studentsRoutes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  {
    path: '', component: StudentsComponent, children: [
      { path: 'create', component: StudentsCreateComponent },
      { path: 'search', component: StudentsSearchComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(studentsRoutes)], exports: [RouterModule]
})
export class StudentsRoutingModule { }
