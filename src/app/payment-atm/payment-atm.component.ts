import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentATM } from '../Payment';
import { PaymentAPIATMService } from '../payment-api-atm.service';
import { Router, ActivatedRoute } from '@angular/router';
// Import thư viện Router

@Component({
  selector: 'app-payment-atm',
  templateUrl: './payment-atm.component.html',
  styleUrls: ['./payment-atm.component.css']
})
export class PaymentAtmComponent {

  paymentATM: PaymentATM = new PaymentATM();
  errMessage: string=''

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private _service: PaymentAPIATMService) {}

  postPaymentATM()
  {
  this._service.postPaymentATM(this.paymentATM).subscribe({
  next:(data)=>{this.paymentATM=data},
  error:(err)=>{this.errMessage=err}
  })

  }

  goToPaymentPage() {
    this.router.navigate(['/payment']);
  }

  isValidForm = true;

  checkFormValidity() {
    if (!this.paymentATM.Sothe || !this.paymentATM.Hieuluc_Thang || !this.paymentATM.Hieuluc_Ngay || !this.paymentATM.CVV_Code || !this.paymentATM.Tenchuthe) {
      this.isValidForm = false;
    } else {
      this.isValidForm = true;
    }
  }

}
