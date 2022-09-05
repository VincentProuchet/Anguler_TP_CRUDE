import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { __values } from 'tslib';
import { of } from "rxjs";
import Product from '../model/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {
  products: Product[] = new Array<Product>();
  private currentId: number = 0;
  /** Obeserver pour la gestion d'evenément d'effacement  */
  private ObserverDelete = {
    /** ce subscribe met à jour la table locale
          *  des produits
          * attention cela ne fonctionne que si l'est id de la table correspondent
          * aux index du tableau
         */
    next: () => {
      // cette version devrait corriger le problème
      this.products.forEach((element: Product, index: number) => {
        // on controlle les ID
        if (element.id == this.currentId) {
          // si les id correspondent on efface l'element courant
          this.products.splice(index, 1);
        }
      });
      Notiflix.Notify.success("Le produit à bien été supprimé");
    },

    error: (e: any) => {
      Notiflix.Notify.success("Une Erreur s'est produite");
      console.log(e);
    },
    complete: () => { }

  };

  constructor(private srvProducts: ProductsService) { }

  ngOnInit(): void {
    this.srvProducts
      .getProducts()
      .subscribe((data: Product[]) => {
        this.products = data;
      });
  }


  deleteProduct(id: number) {
    this.currentId = id;
    this.srvProducts.deleteProduct(id)
      .subscribe(this.ObserverDelete);
  }

}
