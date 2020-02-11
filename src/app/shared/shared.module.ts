import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { QuicklinkModule } from 'ngx-quicklink'

import { NavbarComponent } from './components/navbar/navbar.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SkeletonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    QuicklinkModule
  ],
  exports: [
    NavbarComponent,
    SkeletonComponent
  ]
})
export class SharedModule { }
