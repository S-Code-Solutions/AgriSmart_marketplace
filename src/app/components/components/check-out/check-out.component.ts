import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ViewportScroller} from "@angular/common";
import {PaymentComponent} from "./components/payment/payment.component";

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  CItemLot!: any[];
  private checkComponentsSub!: Subscription;
  uprice = 100;
  totalamount!: number;
  uPrice = 0
  temps!: any[]
  MyArrayType: Array<Object> = [];

  favoriteSeason!: string;
  seasons: string[] = ['Cash', 'Card'];

  constructor(private _snackBar: MatSnackBar,
              private router: Router, private act: ActivatedRoute, public dialog: MatDialog, private scroll: ViewportScroller) {
  }

  ngOnInit(): void {
    this.GetAllCheck();
    this.uPrice = 188
    this.scroll.scrollToPosition([0, 0]);

  }

  GetAllCheck() {
    // this.checkComponentsSub = this.cartServiceService.GetAllCartList()
    //   .subscribe((result: any) => {
    //
    //     this.CItemLot = result.content;
    //     this.orderList(result.content)
    //     console.log(this.CItemLot)
    //     this.total();
    //   }, error => {
    //     console.log(error);
    //   });
  }

  orderList(ItemLot: any[]) {
    // let temp: PlaceOrderDetailslsDTO[] = [];
    // ItemLot.forEach(e => {
    //   var orderDetailsId = ''
    //   var qty = e.qty
    //   var productId = e.product.productId
    //   this.MyArrayType.push({orderDetailsId, qty, productId})
    // })
    // // this.temps = temp
    // // return temp;
    // // this.makeOrder(temp)
  }

  makeOrder() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = "row";
    dialogConfig.width = 'auto';
    dialogConfig.height = '608px';
    // console.log(row);
    console.log('----------------------------');
    const dialogRef = this.dialog.open(PaymentComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log("response code1")
      console.log(result)
      console.log("response code2")
      // this.refreshTable();
    });

    // const approval = this.dialog.open(DialogsComponent, {
    //   width: '350px',
    //   data: new ApprovalDialogConfig('Confirm', 'Order Now !', 'Are you sure sir you want to Make The Order ?')
    // });
    // approval.afterClosed().subscribe(approve => {
    //   if (approve) {
    //     this.cartServiceService.placeOrder(new PlaceorderDTO(
    //       "",
    //       this.totalamount,
    //       "",
    //       "PLACED",
    //       this.MyArrayType,
    //     )).subscribe(res => {
    //       console.log(res)
    //       if (res.code == '00') {
    //         console.log("order Placed")
    //         this.router.navigate(['/cart/complete']);
    //       }
    //     }, error => {
    //       console.log(error)
    //       this.dialog.open(DialogsComponent, {
    //         width: '350px',
    //         // height: '200px',
    //         data: new ApprovalDialogConfig('Error', 'Error!', 'Invalid Inputs Or Already registred')
    //       });
    //     });
    //   } else {
    //     this.dialog.open(DialogsComponent, {
    //       width: '350px',
    //       // height: '200px',
    //       data: new ApprovalDialogConfig('Error', 'Error!', 'Please Insert All Values Correctly')
    //     });
    //   }
    // });
  }

  deactiveCart() {

  }


  // horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  // verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  odrerPlacedsnackbar() {
    // this._snackBar.open('Order Successfully Placed!!', 'ok', {
    //   horizontalPosition: this.horizontalPosition,
    //   verticalPosition: this.verticalPosition,
    //   panelClass: ['green-snackbar', 'login-snackbar']
    // });
  }

  total() {
    console.log("this.CItemLot")

    let total = 0;
    for (var i = 0; i < this.CItemLot.length; i++) {
      console.log(this.CItemLot[i])
      if (this.CItemLot[i].cartId) {
        total += this.CItemLot[i].qty * this.uPrice;
        this.totalamount = total;
      }
    }
    // return total;
    console.log(this.totalamount)
  }

}
