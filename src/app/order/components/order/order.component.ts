import { Component, OnInit } from '@angular/core';
import { CartService } from '@core/services/cart.service';
import { Observable } from 'rxjs';
import { map, reduce } from 'rxjs/operators';

import { AuthService } from '@core/services/auth.service';
import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>;
  cartLength: number;

  constructor(
    public auth: AuthService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    this.products$ = this.cartService.cart$;
    this.products$
    .pipe(
      map(products => products.length)
    )
    .subscribe(total => {
      this.cartLength = total;
    });
  }
}
