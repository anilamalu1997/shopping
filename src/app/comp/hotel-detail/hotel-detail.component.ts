import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/service/product-list.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent implements OnInit {


list:any=[];


  constructor(private productDetail:ProductListService) { }

  ngOnInit(): void {
    this.list= this.productDetail.item;
  // console.log(this.list.location);
  }
  }


