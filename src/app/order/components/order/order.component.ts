import { Component, OnInit } from '@angular/core';
import { CartService } from '@core/services/cart.service';
import { Router } from '@angular/router';

import { AuthService } from '@core/services/auth.service';
import { Product } from '@core/models/product.model';

import { Confirmable } from '@core/decorators/confirmable.decorator';
import { ProductsFirebaseService } from '@core/services/products-firebase.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  cartProducts: Product[];
  listaProducts: Product[];
  cartLength: number;
  cartPrice = 0;
  user: string;

  constructor(
    public auth: AuthService,
    private cartService: CartService,
    private productsService: ProductsFirebaseService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getUser();
    this.getCartInfo();
    this.getProducts();
  }
  getUser() {
    this.auth.userProfile$.subscribe(profile => {
      if (profile && profile.nickname) {
        this.user = profile.nickname;
      }
    });
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
  getProducts() {
    this.productsService.getProducts().subscribe(products => {
      this.listaProducts = products;
    });
  }

  @Confirmable()
  sendOrder() {
    const products = this.listaProducts;
    this.cartProducts.forEach(cartProducts => {
      products.forEach(product => {
        if (product.id === cartProducts.id) {
          const body = {
            comprador: this.user,
            disponible: false
          };
          this.productsService.sendProducts(body, product.id).subscribe(res => {
            console.log(res);
          });
        }
      });
    });
    this.cartService.cleanCart();
    this.router.navigate(['/home']);
  }

  @Confirmable()
  cancelOrder() {
    this.cartService.cleanCart();
    this.router.navigate(['/products']);
  }
}
