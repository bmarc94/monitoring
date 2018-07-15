import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassroomsComponent } from './classrooms.component';

import { ClassroomRoutingModule } from './classrooms.routing';

@NgModule({
  imports: [
    CommonModule
    , ClassroomRoutingModule
  ],
  declarations: [
    ClassroomsComponent
  ]
})
export class ClassroomsModule { }
