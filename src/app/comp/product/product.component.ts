import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { details } from 'src/app/modals/productDetails';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public productList: Array<details> = [];




  //response: any;


  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    // this.productService.fetchData().subscribe((response:any)=>{
    //   console.log(response);
    // }


    // );
    this.productService.fetchData().subscribe((response: any) => {
      //this.response=response;
      //console.log(response);

      //console.log(this.productList.length);



      if (response !== undefined &&
        response.length > 0) {
        this.productList = [...response];
        this.productList.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: a.price });
        });
        //console.log(this.productList.length);
        // console.log(this.productList);
        // console.log(this.productList);
      }


    })
    //console.log(this.productService.fetchData());

  }


  getProduct(id: any) {
    // return (this.productList.)
  }



}
