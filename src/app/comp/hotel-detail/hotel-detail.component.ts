import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/service/product-list.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { reviewModal } from 'src/app/modals/review';
import { ApiService } from 'src/app/service/api.service';
import { details } from 'src/app/modals/productDetails';


@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent implements OnInit {

formValue !: FormGroup;
reviewModelObj : reviewModal = new reviewModal;
id : details = new details;
list:any=[];
reviewData !:any;


  constructor(private productDetail:ProductListService, private formBuilder: FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.list= this.productDetail.item;
  // console.log(this.list.location);
  this.formValue = this.formBuilder.group({
    name:[''],
    review:['']
  })

  this.getAllReview();

  }

postReview(){
  this.reviewModelObj.name = this.formValue.value.name;
  this.reviewModelObj.review = this.formValue.value.review;
  // this.id.id=this.productDetail.item;


  
  this.api.postReview(this.reviewModelObj)
  .subscribe(res=>{
    console.log(res);
    alert("Review added succesfully")
    this.formValue.reset();
    this.getAllReview();
  },
  err=>{
    alert("something went wrong")
  
  })
}

getAllReview(){
  this.api.getReview()
  .subscribe(res=>{
    this.reviewData = res;

  })
}

  }


