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
  /**Create a product in Database
   *
   * @param ProductName
   * @param ProductDescription
   * @param ProductPrice
   */
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
   *Read All products from database
   * @returns un obesrvable de TABLEAU de product
   */
  getProducts(): Observable<Product[]> {
    return this
      .http
      .get<Product[]>(`${this.uri}`);
  }
  /**
   * Read One Product from Id
   * @param id of the product wanted
   * @returns an Observable of ONE product
   */
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.uri}/${id}`);
  }

  updateProduct(productName: string, productDescription: string, productPrice: string, id: string) {
    const product = {
      id: parseInt(id),
      ProductName: productName,
      ProductDescription: productDescription,
      ProductPrice: parseFloat(productPrice)
    };
    return this.http.put<Product>(`${this.uri}/${id}`, product);
  }
}
