import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {ViewportScroller} from "@angular/common";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartProducts!: any[];
  private cartComponentsSub!: Subscription;
  private leaves: any;
  // uprice = 100;
  totals = 0;
  totalamount!: number;
  uPrice = 188

  constructor(private _snackBar: MatSnackBar, private scroll: ViewportScroller) {
  }

  ngOnInit(): void {
    this.GetAllCart();
    this.scroll.scrollToPosition([0, 0]);
  }

  GetAllCart() {
    // this.cartComponentsSub = this.cartServiceService.GetAllCartList()
    //   .subscribe((result:any) => {
    //     this.cartProducts = result.content;
    //     // console.log(this.cartProducts.filter(function(creature) {
    //     //   return creature.status == 'ACT';
    //     // }))
    //     this.total()
    //   }, error => {
    //     console.log(error);
    //   });
  }

  Decrement(cartId: any, productId: any, qty: any) {
    if (qty - 1 < 1) {
      qty = 1

    } else {
      qty -= 1;

      this.updateQty(cartId, qty, productId);
    }
  }

  updateQty(cartId: any, qty: any, productId: any) {
    // this.cartServiceService.UpdateCartList(cartId,qty,productId)
    //   .subscribe((result:any) => {
    //
    //     this.GetAllCart();
    //   }, error => {
    //     console.log(error);
    //   });
  }

  Increment(cartId: any, productId: any, qty: any) {

    qty += 1;
    this.updateQty(cartId, qty, productId);
  }

  total() {

    let total = 0;
    for (var i = 0; i < this.cartProducts.length; i++) {
      if (this.cartProducts[i].cartId) {
        total += this.cartProducts[i].qty * this.uPrice;
        this.totalamount = total;
      }
    }
    // return total;

  }


  RemoveItem(cartId: any) {
    // this.cartServiceService.RemoveFromCartList(cartId)
    //   .subscribe((result:any) => {
    //
    //     this.ItemRemovesnackbar();
    //
    //     this.GetAllCart();
    //   }, error => {
    //     console.log(error);
    //   });
  }

  // horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  // verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  ItemRemovesnackbar() {
    // this._snackBar.open('Item Removed From Cart!!', 'ok',{
    //   horizontalPosition: this.horizontalPosition,
    //   verticalPosition: this.verticalPosition,
    //   panelClass: ['yellow-snackbar', 'login-snackbar']
    // });
  }

}
