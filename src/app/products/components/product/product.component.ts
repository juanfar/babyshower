import { Component, Input } from '@angular/core';
import { Product } from '@core/models/product.model';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() producto: Product;
  @Input() page: string;
  isSelected: boolean;

  constructor(
    private cartService: CartService
  ) {
    this.isSelected = false;
  }

  add(e) {
    e.preventDefault();
    this.addCart()
    this.addSelect();
  }

  remove(e) {
    e.preventDefault();
    this.removeCart()
    this.removeSelect();
  }

  addCart() {
    this.isSelected = true;
    this.cartService.addCart(this.producto);
  }

  removeCart() {
    this.isSelected = false;
    this.cartService.removeCart(this.producto);
  }

  addSelect() {
    this.isSelected = true;
  }

  removeSelect() {
    this.isSelected = false;
  }
}
