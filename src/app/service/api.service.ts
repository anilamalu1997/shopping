import { Injectable, IterableDiffers } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { reviewModal } from '../modals/review';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  reviewList = [];
  item: any;
  constructor(private http: HttpClient) { }

  statusUrl = 'http://localhost:3000/posts';
  postReview(data: any) {
    return this.http.post<any>(this.statusUrl, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getReview() {
    return this.http.get<any>(this.statusUrl);
    // .pipe(map((res:any)=>{
    //   return res;
    // }))
  }

  viewReview(item:any){
    this.item=item;
  }

  // viewReview(review: reviewModal) {
  //   const exist = this.reviewList.find((item)=> {
  //     return item.unique === review.id;
  //   });

  //   if(exist)
  //   this.reviewList = this.
  // }


}

