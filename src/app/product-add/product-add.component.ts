import { Component, createPlatform, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  angForm !: FormGroup;

  constructor(private formBd: FormBuilder, private srvProducts: ProductsService) { this.createForm(); }
  ngOnInit(): void { }
  createForm() {

    this.angForm = this.formBd.group(
      {
        ProductName: ['', Validators.required],
        ProductDescription: ['', Validators.required],
        ProductPrice: ['', Validators.required]
      });
  }
  addProduct(ProductName: string, ProductDescription: string, ProductPrice: string) {
    this.srvProducts.addProduct(ProductName, ProductDescription, parseFloat(ProductPrice));
  }

}
