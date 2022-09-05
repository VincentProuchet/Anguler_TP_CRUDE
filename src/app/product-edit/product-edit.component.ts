import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
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
  updateProduct(productName: string, productDescription: string, productPrice: string) {
    this.route.params.subscribe(params => {
      this.srvProducts.updateProduct(productName, productDescription, productPrice, params['id'])
        .subscribe(
          (data: any) => this.router.navigate(['products'])
        );
    });
  }


}


