import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import * as Notiflix from 'notiflix';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  angForm !: FormGroup;
  product: any = {};
  constructor(private route: ActivatedRoute, private router: Router, private srvProducts: ProductsService, private form: FormBuilder) {
    this.createForm();
  }
  /**
   * Initialise le formulaire
   */
  createForm() {
    this.angForm = this.form.group(
      {
        ProductName: ['', Validators.required],
        ProductDescription: ['', Validators.required],
        ProductPrice: ['', Validators.required]
      }
    );
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.srvProducts.getProduct(params['id'])
          .subscribe(response => {
            this.product = response;
          });
      });
  }
  /**
   * Met à jour un le produit
   * avec les nouvelles valeurs
   * @param productName Nom du produit
   * @param productDescription Description du produit
   * @param productPrice Prix du produit
   */
  updateProduct(productName: string, productDescription: string, productPrice: string) {
    this.route.params.subscribe(params => {
      this.srvProducts.updateProduct(productName, productDescription, productPrice, params['id']);


    });
  }


}


