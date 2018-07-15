import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParentsComponent } from './parents.component';
import { ParentsSearchComponent } from './search/parent-search.component';
import { ParentsCreateComponent } from './create/parents-create.component';

const parentsRoutes: Routes = [
  { path: '', component: ParentsComponent, redirectTo: 'search', pathMatch: 'full' },
  {
    path: '', component: ParentsComponent, children: [
      { path: 'create', component: ParentsCreateComponent },
      { path: 'search', component: ParentsSearchComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(parentsRoutes)], exports: [RouterModule]
})
export class ParentsRoutingModule { }
