import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() producto: Product;
  isSelected: boolean;

  constructor() {
    this.isSelected = false;
  }

  ngOnInit() {
  }

  pushProduct(e, product) {
    e.preventDefault()
    this.isSelected = true;
    console.log("product", product);
  }

  popProduct(e, product) {
    e.preventDefault()
    this.isSelected = false;
  }

}
