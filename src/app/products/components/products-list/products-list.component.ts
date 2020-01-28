import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  listaProducts: Array<Product>;
  miUsuario: string;

  constructor(
    private auth: AuthService
  ) {
    this.auth.userProfile$.subscribe(user => {
      if (user) {
        this.miUsuario = user.nickname;
      }
    });
  }

  ngOnInit() {
  }

}
