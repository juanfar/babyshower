import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@core/models/product.model';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() producto: Product;
  @Input() page: string;
  isSelected: boolean;
  loading: boolean;

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.loading = this.page === 'products' ? true : false;
    this.getCartItems();
    setInterval(() => {
      this.loading = false;
    }, 3000);
  }

  add(e) {
    e.preventDefault();
    this.addCart();
  }

  remove(e) {
    e.preventDefault();
    this.removeCart();
  }

  addCart() {
    this.isSelected = true;
    this.cartService.addCart(this.producto);
  }

  removeCart() {
    this.isSelected = false;
    this.cartService.removeCart(this.producto);
  }

  getCartItems() {
    this.cartService.cart$.subscribe(products => {
      products.forEach(product => {
        if (product.id === this.producto.id) {
          this.isSelected = true;
        }
      });
    });
  }
}
