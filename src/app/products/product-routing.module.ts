import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
    canActivate: [ AuthGuard ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class ProductRoutingModule { }