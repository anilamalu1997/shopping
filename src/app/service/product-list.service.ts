import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
item:any=[];
  constructor() { }


  viewProduct(item:any){
   this.item=item;
  }
}
