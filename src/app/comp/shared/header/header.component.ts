import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public product: any = [];
  public totalItem: number = 0;
  public grandTotal: number = 0;
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct()
      .subscribe(res => {
        this.totalItem = res.length;
      })

    this.cartService.cartTotal
    .subscribe(res=>{
this.grandTotal = res;
    })
  }

}
