import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
name:any=[];
  
  constructor() { }

 



  
  // getProduct() {
  //   return this.productList.asObservable();
  // }

  // setProduct(product: any) {
  //   this.cartItemList.push(...product);
  //   this.cartItemList.next(product);
  // }
   
  addToCart(name: any) {
    this.name=name;
    // this.productList.next(this.cartItemList);
        // this.getTotalPrice();
    
  }

  // getTotalPrice() {
  //   let grandTotal = 0;
  //   this.cartItemList.map((a: any) => {
  //     grandTotal += a.total;
  //   })
  // }

  // removeCartItem(product: any) {
  //   this.cartItemList.map((a: any, index: any) => {
  //     if (product.id === a.id) {
  //       this.cartItemList.splice(index, 1);
  //     }
  //   })
  // }

  // removeAllCart() {
  //   this.cartItemList = []
  //   this.productList.next(this.productList);
  // }
}