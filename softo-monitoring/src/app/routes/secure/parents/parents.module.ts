import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentsComponent } from './parents.component';
import { ParentsRoutingModule } from './parents.routing';

@NgModule({
  imports: [
    CommonModule,
    ParentsRoutingModule
  ],
  declarations: [ParentsComponent]
})
export class ParentsModule { }
