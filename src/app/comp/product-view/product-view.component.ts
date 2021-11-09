import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/product-list.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  list:any=[]
  constructor(private productDetail:ProductListService) { }

  ngOnInit(): void {
   this.list= this.productDetail.item;
   console.log(this.list);
  }


}
