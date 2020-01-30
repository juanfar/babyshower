import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from '@products/products.module';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './components/order/order.component';


@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ProductsModule
  ]
})
export class OrderModule { }
