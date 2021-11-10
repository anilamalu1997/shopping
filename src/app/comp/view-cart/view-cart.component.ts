import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {
// cart:any=[];
//  items:any;
 public product : any =[];
 public grandTotal !: number ;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res=>{
      this.product = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  // this.cart= this.cartService.name;
  //  console.log(this.cart.id);
  // this.items = this.cartService.getItems();
 
  // this.cartService.list.asObservable().subscribe(del=>{
  //   this.items = del;
    

  // });
  // console.log(this.items);
  }

  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }
  
  emptyCart(){
    this.cartService.removeAllCart();
  }
  // removeCartItem(rem:any){

  //   this.cartService.removeCartItem(rem);

  // }
  
 
}
