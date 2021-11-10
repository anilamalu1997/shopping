import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { observable } from 'rxjs';
import { details } from 'src/app/modals/productDetails';


@Injectable({
  providedIn: 'root'
})
export class CartService {
//   name: details[] = [];
// public list=new BehaviorSubject<any>([]);
public cartItemList:any=[]
public productList = new BehaviorSubject<any>([]);


  constructor() { }

getProduct(){
 return this.productList.asObservable();
}

setProduct(product:any){
  this.cartItemList.push(product);
  this.productList.next(product);
}

addToCart(product:any){
  this.cartItemList.push(product);
  this.productList.next(this.cartItemList);
  this.getTotalPrice();
  console.log(this.cartItemList);
}

getTotalPrice() : number{
  let grandTotal = 0;
  this.cartItemList.map((a:any)=>{
    grandTotal += a.total;
  });
  return grandTotal;
}

removeCartItem(product:any){
this.cartItemList.map((a:any, index:any)=>{
  if(product.id === a.id){
    this.cartItemList.splice(index,1);
  }
})
this.productList.next(this.cartItemList);
}

removeAllCart(){
  this.cartItemList=[];
  this.productList.next(this.cartItemList);
}

  // addToCart(list:details) {
    // const exist = this.name.find((item) => {
    //   return item.id === name.id;
    // });
    // if(exist)

    //  else
    // this.name.push(list);
    // this.list.next(name);
    // console.log(name);
  // }

  // getItems() {

  //   return this.name;
  // }

  // clearCart() {
  //   this.name = [];
  //   return this.name;
  // }

  
  // removeCartItem(product: any) {
  //   this.cartItemList.map((a: any, index: any) => {
  //     if (product.id === a.id) {
  //       this.cartItemList.splice(index, 1);
  // removeCartItem(name: details) {

  //   this.name.map((a: any, index: any) => {
  //     if (name.id === a.id) {
  //       this.name.splice(index, 1)
  //     }

  //   })
  //   this.list.next(name);
  // }






  // getProduct() {
  //   return this.productList.asObservable();
  // }

  // setProduct(product: any) {
  //   this.cartItemList.push(...product);
  //   this.cartItemList.next(product);
  // }

  // addToCart(name: any) {
  //   this.name=name;
  // }
  // this.productList.next(this.cartItemList);
  // this.getTotalPrice();



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