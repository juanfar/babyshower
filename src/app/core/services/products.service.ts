import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsModule } from '@products/products.module';
import { Product } from '@core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }
}
