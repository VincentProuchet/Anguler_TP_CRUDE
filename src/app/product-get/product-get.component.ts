import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import Product from '../model/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {
  products: Product[] = new Array<Product>();

  constructor(private srvProducts: ProductsService) { }

  ngOnInit(): void {
    this.srvProducts
      .getProducts()
      .subscribe((data: Product[]) => {
        this.products = data;
      });
  }


  deleteProduct(id: number) {
    let product !: Product;
    this.srvProducts.deleteProduct(id)
      .subscribe(
        /** ce subscribe met à jour la table locale
         *  des porduits
         * attention cela ne fonctionne que si l'est id de la table correspondent
         * aux index du tableau
        */
        () => {
          // cette version devrait corriger le problème
          this.products.forEach((element: Product, index: number) => {
            // on controlle les ID
            if (element.id == id) {
              // si les id correspondent on efface l'element courant
              this.products.splice(index, 1);
            }
          });
        });
  }

}
