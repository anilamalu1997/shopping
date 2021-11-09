import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './comp/product-view/product-view.component';
import { ProductComponent } from './comp/product/product.component';
import { ViewCartComponent } from './comp/view-cart/view-cart.component';

const routes: Routes = [
  //{ path: 'Shares/Header', loadChildren: () => import('./Shares/header/header.module').then(m => m.HeaderModule) }
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: ProductComponent
  },
  {

    path: 'view/:id',
    component: ProductViewComponent
  },
  {
    path: 'viewCart',
    component: ViewCartComponent
  }
  // {
  //   path:'favourites',
  //   component:FavoritesComponent

  // }



];


@NgModule({
  imports: [

    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
