
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule, MatTabNav } from '@angular/material';
import { ParentsRoutingModule } from './parents.routing';

import { ParentsComponent } from './parents.component';
import { ParentsSearchComponent } from './search/parent-search.component';
import { ParentsCreateComponent } from './create/parents-create.component';

@NgModule({
  imports: [
    CommonModule,
    ParentsRoutingModule,

    MatTabsModule
  ],
  declarations: [
    ParentsComponent,
    ParentsCreateComponent,
    ParentsSearchComponent
  ]
})
export class ParentsModule { }
