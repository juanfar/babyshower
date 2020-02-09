import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { Product } from '@core/models/product.model';
import { ProductsFirebaseService } from '@core/services/products-firebase.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  listaProducts: Product[];
  miUsuario: string;

  constructor(
    private auth: AuthService,
    private productsService: ProductsFirebaseService
  ) {}
  ngOnInit() {
    this.getAuth();
    this.getProducts();
  }
  getAuth() {
    this.auth.userProfile$.subscribe(user => {
      if (user) {
        this.miUsuario = user.nickname;
      }
    });
  }
  getProducts() {
    this.productsService.getProducts().subscribe(products => {
      this.listaProducts = products;
    });
  }
}
