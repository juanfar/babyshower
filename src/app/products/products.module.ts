import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductRoutingModule } from './product-routing.module';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductsModule { }
