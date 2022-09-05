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
  /**
   *
   * @param formBd injection du formBuilder
   * @param srvProducts Injection du ProductService
   */
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
  /**
   * Demande au services d'ajouter un produit dans la base de données
   * @param ProductName
   * @param ProductDescription
   * @param ProductPrice
   */
  addProduct(ProductName: string, ProductDescription: string, ProductPrice: string) {
    this.srvProducts.addProduct(ProductName, ProductDescription, ProductPrice);
    // et on remet les valeur des champs à 0 en cas de réussite
    // un subscribe aurait été plus sympa
    this.angForm.reset();


  }

}
