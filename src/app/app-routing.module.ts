import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: 'payment', component: PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  // Inject Router vào constructor
  constructor(private router: Router) {}

// Xử lý khi nhấn vào radio
  goToPaymentPage() {
  this.router.navigate(['/payment']);
}
}

