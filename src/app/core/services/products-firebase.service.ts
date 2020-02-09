import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsFirebaseService {

  apiUrl = 'https://us-central1-babyshower-3ae23.cloudfunctions.net/api';

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  sendProducts(body, id) {
    return this.http.put<Product[]>(`${this.apiUrl}/products/${id}`, body);
  }
}
