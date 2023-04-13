import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./components/components/home-page/home-page.component";
import {AboutUsPageComponent} from "./components/components/about-us-page/about-us-page.component";
import {ProductsComponent} from "./components/components/products/products.component";
import {AuctionComponent} from "./components/components/auction/auction.component";
import {PublicForumComponent} from "./components/components/public-forum/public-forum.component";
import {WishlistComponent} from "./components/components/wishlist/wishlist.component";
import {CartComponent} from "./components/components/cart/cart.component";
import {CheckOutComponent} from "./components/components/check-out/check-out.component";
import {BidsComponent} from "./components/components/bids/bids.component";

const routes: Routes = [
  {path:'', redirectTo:'/homepage', pathMatch:'full'},
  {path:'homepage', component:HomePageComponent},
  {path:'shop', component:ProductsComponent},
  {path:'auction', component:AuctionComponent},
  {path:'forum', component:PublicForumComponent},
  {path:'wishlist', component:WishlistComponent},
  {path:'cart', component:CartComponent},
  {path:'cart/checkout', component:CheckOutComponent},
  {path:'bids', component:BidsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
