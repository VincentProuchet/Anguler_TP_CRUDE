import { Component, createPlatform, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  angForm !: FormGroup;

  constructor(private formBd: FormBuilder) { this.createForm(); }
  ngOnInit(): void { }
  createForm() {

    this.angForm = this.formBd.group(
      {
        ProductName: ['', Validators.required],
        ProductDescription: ['', Validators.required],
        ProductPrice: ['', Validators.required]
      });
  }

}
