import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './viewproducts/product-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewproductsComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
