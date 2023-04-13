import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/components/home-page/home-page.component';
import { LoginPageComponent } from './core/components/login-page/login-page.component';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { AboutUsPageComponent } from './components/components/about-us-page/about-us-page.component';
import { ContactUsPageComponent } from './components/components/contact-us-page/contact-us-page.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { ServicePageComponent } from './components/components/service-page/service-page.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FinancialServicesComponent } from './components/components/service-page/components/financial-services/financial-services.component';
import { EducationServicesComponent } from './components/components/service-page/components/education-services/education-services.component';
import { WarehouseServicesComponent } from './components/components/service-page/components/warehouse-services/warehouse-services.component';
import { ConsultingServicesComponent } from './components/components/service-page/components/consulting-services/consulting-services.component';
import { PublicForumComponent } from './components/components/public-forum/public-forum.component';
import { WeatherForecastingComponent } from './components/components/weather-forecasting/weather-forecasting.component';
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {MatButtonModule} from "@angular/material/button";
import { ProductsComponent } from './components/components/products/products.component';
import { AuctionComponent } from './components/components/auction/auction.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSliderModule} from "@angular/material/slider";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MaterialFileInputModule} from "ngx-material-file-input";
import { WishlistComponent } from './components/components/wishlist/wishlist.component';
import {HttpClientModule} from "@angular/common/http";
import {CookieModule} from "ngx-cookie";
import { CartComponent } from './components/components/cart/cart.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { CheckOutComponent } from './components/components/check-out/check-out.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatDialogModule} from "@angular/material/dialog";
import { PaymentComponent } from './components/components/check-out/components/payment/payment.component';
import { BidsComponent } from './components/components/bids/bids.component';
import {MatMenuModule} from "@angular/material/menu";
import { OrdersComponent } from './components/components/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    NavBarComponent,
    AboutUsPageComponent,
    ContactUsPageComponent,
    FooterComponent,
    ServicePageComponent,
    FinancialServicesComponent,
    EducationServicesComponent,
    WarehouseServicesComponent,
    ConsultingServicesComponent,
    PublicForumComponent,
    WeatherForecastingComponent,
    ProductsComponent,
    AuctionComponent,
    WishlistComponent,
    CartComponent,
    CheckOutComponent,
    PaymentComponent,
    BidsComponent,
    OrdersComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CarouselModule,
        FormsModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatBadgeModule,
        MatButtonModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        MatSliderModule,
        MatInputModule,
        MatSelectModule,
        MaterialFileInputModule,
        HttpClientModule,
        CookieModule.forRoot(),
        MatSnackBarModule,
        MatRadioModule,
        MatDialogModule,
        MatMenuModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
