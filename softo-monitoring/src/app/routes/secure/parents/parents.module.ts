
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ParentsRoutingModule } from './parents.routing';
import { NavTabsModule } from '../../../lib/nav-tabs';


import { ParentsComponent } from './parents.component';
import { ParentsSearchComponent } from './search/parent-search.component';
import { ParentsCreateComponent } from './create/parents-create.component';

@NgModule({
  imports: [
    CommonModule,
    ParentsRoutingModule,
    RouterModule,

    NavTabsModule
  ],
  declarations: [
    ParentsComponent,
    ParentsCreateComponent,
    ParentsSearchComponent
  ]
})
export class ParentsModule { }
