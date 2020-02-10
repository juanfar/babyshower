import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@core/models/product.model';
import { GlobalConstants } from 'src/app/common/global-constants';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsFirebaseService {

  apiUrl = GlobalConstants.apiURL;

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  sendProducts(body, id) {
    console.log(body);
    return this.http.put<Product[]>(`${this.apiUrl}/products/${id}`, body);
  }

  getMyProducts(user) {
    return this.http.get<Product[]>(`${this.apiUrl}/products/${user}`);
  }
}
