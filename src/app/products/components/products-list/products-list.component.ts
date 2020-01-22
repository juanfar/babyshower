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
    console.log(this.auth.userProfile$.source);
    this.miUsuario = 'yo';
    this.listaProducts = [
      {
        id: '1',
        name: 'zapatos',
        comprador: 'yo',
        disponible: false,
        precio: '1000'
      },
      {
        id: '2',
        name: 'pantalon',
        comprador: 'mafe',
        disponible: false,
        precio: '1000'
      },
      {
        id: '3',
        name: 'camisa',
        comprador: '',
        disponible: false,
        precio: '1000'
      },
      {
        id: '4',
        name: 'gorra',
        comprador: 'cristina',
        disponible: false,
        precio: '1000'
      },
      {
        id: '5',
        name: 'medias',
        comprador: '',
        disponible: false,
        precio: '1000'
      },
    ];
  }

  ngOnInit() {
  }

}
