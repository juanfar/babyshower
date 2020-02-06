import { Component, OnInit } from '@angular/core';
import { CartService } from '@core/services/cart.service';
import { Router } from '@angular/router';

import { AuthService } from '@core/services/auth.service';
import { Product } from '@core/models/product.model';
import { ProductsService } from '@core/services/products.service';

import Swal from 'sweetalert2';

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
    private productsService: ProductsService,
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
        this.user = profile.nickname
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
  sendOrder() {
    const products = JSON.parse(JSON.stringify(this.listaProducts));
    this.cartProducts.forEach(cartProducts => {
      products.forEach(products => {
        if (products.id === cartProducts.id) {
          products.compradores.push(this.user);
          products.disponible = false;
        }
      });
    });
    this.productsService.sendProducts(products).subscribe(res => {
    });
    this.cartService.cleanCart();
    this.router.navigate(['/home']);
  }
  cancelOrder() {
    this.cartService.cleanCart();
    this.router.navigate(['/products']);
  }
  aceptar() {
    Swal.fire({
      title: '¿Estas Seguro?',
      text: 'Estos son los productos que vas a regalar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, regalar!',
      cancelButtonText: 'No, Esperar'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Gracias!',
          'Tus Regalos has sido reservados.',
          'success'
        )
        this.sendOrder();
      }
    });
  }
  cancelar() {
    Swal.fire({
      title: '¿Estas Seguro?',
      text: 'Se eliminarán estos productos de tu orden',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, seguro!',
      cancelButtonText: 'No, Esperar'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Vale!',
          'Puedes seleccionar nuevos productos',
          'success'
        )
        this.cancelOrder();
      }
    });
  }
}
