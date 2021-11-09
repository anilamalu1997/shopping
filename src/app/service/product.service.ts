import { HttpClient } from '@angular/common/http';
// import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ProductListService } from '../product-list.service';
import { BehaviorSubject } from 'rxjs';
//import { map } from "rxjs/operators";
//import { Http } from '@angular/http';




@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //http: any;
  // public cartItemList: any = [];

  constructor(private http: HttpClient) { }
  //  public cartItemList : any = []
  //  public productList = new BehaviorSubject<any>([]); 
  // getProductName(){
  //   return  this.httpClient.get(
  //     `src\assets\json\hotels.json`
  //   );
  // }
  fetchData() {
    return this.http.get('assets/json/hotels.json');
    
  }

  getProduct(id:any){

    
    // return this..find(
    //   this.detailItem.id === id);
      }
  
  // getProduct(){
  //   return this.productList.asObservable();
  // }

  // setProduct(product : any){
  //   this.cartItemList.push(...product);
  //   this.cartItemList.next(product);
  // }

  // addToCart(product:any){
  //   this.cartItemList.push(product);
  //   this.productList.next(this.cartItemList);
  //   this.getTotalPrice();
  //   console.log(this.cartItemList);
  //     }

  //     getTotalPrice(){
  //       let grandTotal = 0;
  //       this.cartItemList.map((a:any)=>{
  //         grandTotal += a.total;
  //       })
  //     }

  //     removeCartItem(product:any){
  //       this.cartItemList.map((a:any,index:any)=>{
  //         if(product.id=== a.id){
  //           this.cartItemList.splice(index,1);
  //         }
  //       })
  //     }

  //     removeAllCart(){
  //     this.cartItemList = []
  //     this.productList.next(this.productList);
  //     }

    }