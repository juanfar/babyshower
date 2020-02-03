import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PreloadService } from '@core/services/preload.service';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('@home/home.module').then(m => m.HomeModule),
    data: { preload: true }
  },
  {
    path: 'products',
    loadChildren: () => import('@products/products.module').then(m => m.ProductsModule),
    data: { preload: true }
  },
  {
    path: 'orden',
    loadChildren: () => import('@order/order.module').then(m => m.OrderModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('@profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: '**',
    loadChildren: () => import('@page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
