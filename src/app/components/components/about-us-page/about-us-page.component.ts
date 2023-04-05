import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {HomeService} from "../../services/home.service";

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.scss']
})
export class AboutUsPageComponent implements OnInit {
  // customOptions3: any;
  newsImages! :any[];

  constructor(private homeservice:HomeService) { }

  ngOnInit(): void {
    this.newsSlider();
  }

  newsSlider(){
    this.newsImages = this.homeservice.getNewsDetails().newsStore
  }

  scrollToTop() {

  }

  customOptions3: OwlOptions = {
    stagePadding: 40,
    margin:10,
    autoplay: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: false
  }
}
