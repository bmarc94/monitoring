import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule } from '@angular/material';
import { SecureLayoutComponent } from './components/layouts/secure-layout/secure-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,

    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule
  ],
  declarations: [SecureLayoutComponent]
})
export class CoreModule { }
