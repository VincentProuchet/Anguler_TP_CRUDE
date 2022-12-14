import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http";
import { LoadingBarModule, LOADING_BAR_CONFIG } from "@ngx-loading-bar/core";


import { AppRoutingModule } from './app-routing.module';

import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductGetComponent } from './product-get/product-get.component';
import { ProductsService } from './products.service';
@NgModule({
  providers: [
    ProductsService,
    {
      provide: LOADING_BAR_CONFIG,
      useValue: { latencyTreshold: 0 }
    }

  ],
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductGetComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    LoadingBarModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
