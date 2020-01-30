import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { AuthGuard } from '@core/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
    canActivate: [ AuthGuard ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
