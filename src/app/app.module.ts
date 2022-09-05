import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Event, Navigation, Router } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';

import { LoadingBarModule, LOADING_BAR_CONFIG } from "@ngx-loading-bar/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';

import { ProductAddComponent } from './product-add/product-add.component';
import { ProductGetComponent } from './product-get/product-get.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
@NgModule({
  providers: [{
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
    HttpClientModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
