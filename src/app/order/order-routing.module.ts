import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { AuthGuard } from '@core/guards/auth.guard';
import { OrderGuard } from '@core/guards/order.guard';


const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
    canActivate: [ AuthGuard, OrderGuard ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
