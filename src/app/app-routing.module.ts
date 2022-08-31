import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from "./product-add/product-add.component";
import { ProductGetComponent } from "./product-get/product-get.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";

const routes: Routes = [
  {
    path: 'pruduct/create',
    component: ProductAddComponent
  },
  {
    path: 'edit/:id',
    component: ProductEditComponent
  },
  {
    path: 'pruducts',
    component: ProductGetComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
