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

  cartProducts: Product[];
  cartLength: number;
  cartPrice = 0;

  constructor(
    public auth: AuthService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.getCartInfo();
  }

  getCartInfo() {
    this.cartService.cart$.subscribe(products => {
      this.cartProducts = products;
      this.cartLength = products.length;
      products.forEach(product => {
        this.cartPrice += product.precio;
      });
    });
  }

  sendOrder() {

  }
  cancelOrder() {
    
  }
}
