import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule, MatInputModule, MatCardModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { StudentsRoutingModule } from './students.routing';
import { NavTabsModule } from './../../../lib/nav-tabs/nav-tabs.module';

import { StudentsComponent } from './students.component';
import { StudentsSearchComponent } from './search/students-search.component';
import { StudentsCreateComponent } from './create/students-create.component';


@NgModule({
  imports: [
    CommonModule,
    StudentsRoutingModule,
    RouterModule,
    NavTabsModule,

    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule, MatNativeDateModule
  ],
  declarations: [
    StudentsCreateComponent,
    StudentsSearchComponent,
    StudentsComponent
  ]
})
export class StudentsModule { }
