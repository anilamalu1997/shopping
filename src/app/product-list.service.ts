import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
item:any=[];
  constructor() { }


  viewCart(item:any){
   this.item=item;
  }
}
