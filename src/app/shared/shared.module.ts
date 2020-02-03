import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { QuicklinkModule } from 'ngx-quicklink'

import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    QuicklinkModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
