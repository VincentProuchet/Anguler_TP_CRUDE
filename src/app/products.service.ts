import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import * as Notiflix from 'notiflix';

import { Observable, Subscription } from 'rxjs';
import Product from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = 'http://localhost:3000/products';




  constructor(private http: HttpClient, private router: Router) { }
  /**Create a product in Database
   *
   * @param ProductName
   * @param ProductDescription
   * @param ProductPrice un prix, notez que le controle d'intégrité est fait par le service
   *                     et non en amont.ça c'est pour éviter de les chercher partout
   */
  addProduct(ProductName: string, ProductDescription: string, ProductPrice: string, formulaire: FormGroup): Subscription {
    const thatProduct = {
      ProductName: ProductName,
      ProductDescription: ProductDescription,
      ProductPrice: parseFloat(ProductPrice) || 0
    };
    return this.http.post(`${this.uri}`, thatProduct).subscribe(
      {
        next: (res) => {
          Notiflix.Notify.success('Produit Ajouté');
          formulaire.reset();
        },
        error: (error) => {
          Notiflix.Notify.failure(`Le produit n'a pas été ajouté`);
          console.log(error);
        }
      }
    );

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
  /**
   * Met à jour le produit
   * par sa valeurs d'identifiant
   * @param productName
   * @param productDescription
   * @param productPrice
   * @param id
   * @returns
   */
  updateProduct(productName: string, productDescription: string, productPrice: string, id: string) {
    const product = {
      id: parseInt(id),
      ProductName: productName,
      ProductDescription: productDescription,
      ProductPrice: parseFloat(productPrice) || 0
    };
    return this.http.put<Product>(`${this.uri}/${id}`, product).subscribe(
      {
        next: (data) => {
          Notiflix.Notify.success("Le produit a bien été modifié")
          this.router.navigate(['products'])
        },
        error: (err) => {
          Notiflix.Notify.failure("Une erreur s'est porduit");
          console.log(err);

        },
        complete: () => { }
      }
    );;
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.uri}/${id}`)
  }
}
