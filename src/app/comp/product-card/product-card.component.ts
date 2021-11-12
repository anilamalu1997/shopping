import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { details } from 'src/app/modals/productDetails';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';
import { ProductListService } from 'src/app/service/product-list.service';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  public grandTotal !: number ;
 public hotelList : any;



  @Input()
  public detailItem: details = new details;

  public productList: Array<details> = [];
  item: any;

  // response:any;
  // public confirmationMessage = '';
  // public errorMessage = '';
  
 
  //  flag:boolean=false;
  //  spin:boolean=false;
  //  fav=false;
  constructor(private cartService:CartService, private route:ActivatedRoute, private productDetail: ProductListService, private productService:ProductService) { }

  ngOnInit(): void {
const id = this.route.snapshot.params['id'];

this.productService.fetchData().subscribe((response: any) => {
  if (response !== undefined &&
    response.length > 0) {
    this.productList = [...response];
    this.productList.forEach((a:any)=>{
      Object.assign(a,{quantity:1,total:a.price});
    });
  }

  
})


     }

     addToCart(detailItem:any){

      this.cartService.addToCart(detailItem);
     }
  
  viewProduct(item:any) {
    this.productDetail.viewProduct(item);
  }


    //  id = this.route.snapshot.params['id'];
   
    //  return this.productList.find(details=>this.detailItem.id === id);
    //  console.log(id);
   
    

    // this.detailItem.name = this.detailItem.name;
    // this.detailItem.price=this.detailItem.price;
    
    // this.cartService.addToCart(this.detailItem).subscribe((response: any) => { if (response !== undefined &&
    //   response.length > 0) {
    //   this.productList = [...response]; });
  // return this.detailItem.find(this.detailItem=>this.detailItem.id === id);
  


  // addToCart(name:any){
  //   this.cartService.addToCart(name);
  //   //console.log(name);
  // }

  

  // addToCart(name:details){
  //   this.cartService.addToCart(name);
  //   window.alert('Added To Cart');
  //   // console.log(name);
  // }




}
// function addToCart(product:any) {

// }

