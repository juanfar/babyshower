import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() producto: Product;
  @Input() usuario: any;

  constructor() { }

  ngOnInit() {
  }

  addProduct(product) {
    console.log("product", product);
  }

}
