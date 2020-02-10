import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { ProductsFirebaseService } from '@core/services/products-firebase.service';

import { Product } from '@core/models/product.model';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  listaProducts: Product[];
  miUsuario: string;

  constructor(
    public auth: AuthService,
    private productsService: ProductsFirebaseService
  ) { }

  ngOnInit() {
    this.getAuth();
    this.getMyProducts
  }

  getAuth() {
    this.auth.userProfile$.subscribe(user => {
      if (user) {
        this.miUsuario = user.nickname;
      }
    });
  }

  getMyProducts() {
    this.productsService.getMyProducts(this.miUsuario).subscribe(products => {
      this.listaProducts = products;
    });
  }

}
