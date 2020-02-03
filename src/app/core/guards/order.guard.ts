import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CartService } from '@core/services/cart.service';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OrderGuard implements CanActivate {

  total$: Observable<number>;

  constructor(
    private cartService: CartService,
    public router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.cartService.cart$.subscribe(products => {
      if (products.length < 1) {
        this.router.navigate(['/products']);
        return false;
      }
    });
    return true;
  };

}
