import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimetablesRoutingModule } from './timetables.routing';

import { TimetablesComponent } from './timetables.component';

@NgModule({
  imports: [
    CommonModule,
    TimetablesRoutingModule
  ],
  declarations: [
    TimetablesComponent
  ]
})
export class TimetablesModule { }
