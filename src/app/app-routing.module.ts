import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./components/components/home-page/home-page.component";
import {AboutUsPageComponent} from "./components/components/about-us-page/about-us-page.component";
import {ProductsComponent} from "./components/components/products/products.component";
import {AuctionComponent} from "./components/components/auction/auction.component";
import {PublicForumComponent} from "./components/components/public-forum/public-forum.component";

const routes: Routes = [
  {path:'', redirectTo:'/homepage', pathMatch:'full'},
  {path:'homepage', component:HomePageComponent},
  {path:'shop', component:ProductsComponent},
  {path:'auction', component:AuctionComponent},
  {path:'forum', component:PublicForumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
