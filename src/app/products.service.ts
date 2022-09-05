import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
