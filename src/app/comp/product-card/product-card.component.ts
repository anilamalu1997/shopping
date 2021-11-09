import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { details } from 'src/app/modals/productDetails';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';
import { ProductListService } from 'src/app/product-list.service';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input()
  public detailItem: details = new details;

  public productList: Array<details> = [];

  // response:any;
  // public confirmationMessage = '';
  // public errorMessage = '';
  
 
  //  flag:boolean=false;
  //  spin:boolean=false;
  //  fav=false;
  constructor(private productService: ProductService, private route:ActivatedRoute, private productDetail: ProductListService) { }

  ngOnInit(): void {

    this.productService.fetchData().subscribe((response: any) => {
      


      if (response !== undefined &&
        response.length > 0) {
        this.productList = [...response];
        
      }

      
    })
    




  }

  
  viewCart(item:any) {
    this.productDetail.viewCart(item);

    //  id = this.route.snapshot.params['id'];
   
    //  return this.productList.find(details=>this.detailItem.id === id);
    //  console.log(id);
   
    

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

