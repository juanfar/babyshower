import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  listaProducts: any;
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
        comprador: 'yo'
      },
      {
        id: '2',
        name: 'pantalon',
        comprador: 'mafe'
      },
      {
        id: '1',
        name: 'camisa',
        comprador: ''
      },
      {
        id: '1',
        name: 'gorra',
        comprador: 'cristina'
      },
      {
        id: '1',
        name: 'medias',
        comprador: ''
      },
    ];
  }

  ngOnInit() {
  }

}
