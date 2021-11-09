import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {
cart:any=[];

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cart= this.cartService.name;
   console.log(this.cart.id);
  }

}
