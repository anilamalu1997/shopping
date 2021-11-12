import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/service/product-list.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { reviewModal } from 'src/app/modals/review';
import { ApiService } from 'src/app/service/api.service';
import { details } from 'src/app/modals/productDetails';
import { review } from 'src/app/modals/getReview';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent implements OnInit {

  public reviewList: Array<review> = [];
  public specificReview: review = new review;

  stars: number[] = [1, 2, 3, 4, 5];

  

  formValue !: FormGroup;
  reviewModelObj: reviewModal = new reviewModal;
  id: details = new details;
  list: any = [];
  reviewData !: any;
  data: any;
  selectedValue: any;
  




  constructor(private cartService:CartService, private productDetail: ProductListService, private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.list = this.productDetail.item;
    // console.log(this.list.location);
    this.formValue = this.formBuilder.group({
      name: [''],
      review: ['']

    })

    // this.getAllReview();

    this.api.getReview().subscribe((res: any) => {
      if (res !== undefined && res.length > 0) {
        this.reviewList = [...res];

      }
    })

  }

  postReview() {
    this.reviewModelObj.name = this.formValue.value.name;
    this.reviewModelObj.review = this.formValue.value.review;
    this.reviewModelObj.unique = this.productDetail.item;

    // this.id.id=this.productDetail.item;



    this.api.postReview(this.reviewModelObj)
      .subscribe(res => {

        // console.log(res);
        alert("Review added succesfully")
        this.viewReview(res);
        this.formValue.reset();
        this.getAllReview();

      },
        err => {
          alert("something went wrong")

        })
  }

  addToCart(detailItem: any) {

    this.cartService.addToCart(detailItem);
    window.alert('Added to cart!');
  }

  getAllReview() {
    this.api.getReview()
      .subscribe(res => {
        this.data = res;
        this.reviewData = this.data;
        // console.log(this.reviewData);
        // console.log(this.data);
        // if (this.data.unique === this.reviewModelObj.unique)
        // {

        // }



      })
  }

  viewReview(item: any) {
    this.api.viewReview(item);

  }


  countStar(star: any) {
    this.selectedValue = star;
    console.log('Value of star', star);
}



}


