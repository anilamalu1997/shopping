import { Component, Input, OnInit } from '@angular/core';
import { details } from 'src/app/modals/productDetails';
import { CartService } from 'src/app/service/cart.service';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input()
  public detailItem: details = new details;

  // response:any;
  public confirmationMessage = '';
  public errorMessage = '';
  
 
   flag:boolean=false;
   spin:boolean=false;
   fav=false;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {




  }

  viewCart() {
    // this.detailItem.name = this.detailItem.name;
    // this.detailItem.price=this.detailItem.price;
    
    // this.cartService.addToCart(this.detailItem).subscribe((response: any) => { if (response !== undefined &&
    //   response.length > 0) {
    //   this.productList = [...response]; });
  // return this.detailItem.find(this.detailItem=>this.detailItem.id === id);
  }




}
// function addToCart(product:any) {

// }

