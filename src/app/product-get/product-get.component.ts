import { Component, OnInit } from '@angular/core';
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

}
