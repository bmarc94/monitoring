import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatTabsModule } from '@angular/material';

import { NavTabsComponent } from './nav-tabs.component';


@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule
  ],
  declarations: [
    NavTabsComponent
  ],
  exports: [
    NavTabsComponent
  ]
})
export class NavTabsModule { }
