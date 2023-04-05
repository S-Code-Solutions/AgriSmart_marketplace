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
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FinancialServicesComponent } from './components/components/service-page/components/financial-services/financial-services.component';
import { EducationServicesComponent } from './components/components/service-page/components/education-services/education-services.component';
import { WarehouseServicesComponent } from './components/components/service-page/components/warehouse-services/warehouse-services.component';
import { ConsultingServicesComponent } from './components/components/service-page/components/consulting-services/consulting-services.component';
import { PublicForumComponent } from './components/components/public-forum/public-forum.component';
import { WeatherForecastingComponent } from './components/components/weather-forecasting/weather-forecasting.component';

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
    WeatherForecastingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
