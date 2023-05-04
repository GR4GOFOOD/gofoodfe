import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Payment } from '../Payment';
import { PaymentAPIService } from '../payment-api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  payment: Payment = new Payment();
  errMessage: string=''

  constructor(private _service: PaymentAPIService, private router: Router ) {}

  postPayment()
  {
  this._service.postPayment(this.payment).subscribe({
  next:(data)=>{this.payment=data},
  error:(err)=>{this.errMessage=err}
  })
  }

  goToPaymentAtmPage() {
    this.router.navigate(['/payment-atm']);
  }

}

