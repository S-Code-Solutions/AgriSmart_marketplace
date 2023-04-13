import { Component, OnInit } from '@angular/core';
import * as Notiflix from "notiflix";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  payment() {
    Notiflix.Notify.success('Payment Successful!',{
      position: 'center-center',
      width:'500px',
      backOverlay:true,
      backOverlayColor:'rgba(0,0,0,0.5)',
      cssAnimationStyle:'zoom',
      fontSize:'33px'

    });
  }
}
