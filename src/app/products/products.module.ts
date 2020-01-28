import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductRoutingModule } from './product-routing.module';
import { fakeBackendProvider } from '@core/mocks/fake-backend';



@NgModule({
  declarations: [ProductsListComponent, ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  providers: [
    fakeBackendProvider
  ]
})
export class ProductsModule { }
