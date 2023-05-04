import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PaymentAtmComponent } from './payment-atm/payment-atm.component';

const routes: Routes = [
  { path: 'payment', component: PaymentComponent },
    // { path: 'cart', component: CartComponent },
  { path: 'paymentATM', component: PaymentAtmComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent }
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
  goToPaymentAtmPage() {
    this.router.navigate(['/payment-atm']);
  }
}

