import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Product from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }
  addProduct(ProductName: string, ProductDescription: string, ProductPrice: number) {
    const thatProduct = {
      ProductName: ProductName,
      ProductDescription: ProductDescription,
      ProductPrice: ProductPrice
    };
    console.log(thatProduct);
    this.http.post(`${this.uri}`, thatProduct).subscribe(res => console.log("Done"));

  }
  /**
   *
   * @returns un obesrvable de TABLEAU de product
   */
  getProducts(): Observable<Product[]> {
    return this
      .http
      .get<Product[]>(`${this.uri}`);
  }
}
