import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './comp/shared/header/header.component';
//import {matIcon} from '@angular/material'
import { MatIconModule } from '@angular/material/icon';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './comp/product/product.component';
import { ProductCardComponent } from './comp/product-card/product-card.component';
import { HotelDetailComponent } from './comp/hotel-detail/hotel-detail.component';
import { ProductViewComponent } from './comp/product-view/product-view.component';
import { ViewCartComponent } from './comp/view-cart/view-cart.component';
import { CartComponent } from './comp/cart/cart.component';
//import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ProductCardComponent,
    HotelDetailComponent,
    ProductViewComponent,
    ViewCartComponent,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
    // RouterModule.forChild([
    //   { path: '', component: ProductViewComponent },
    //   { path: 'productView', component: ProductViewComponent },
    // ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
