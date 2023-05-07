import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PaymentAtmComponent } from './payment-atm/payment-atm.component';
import { MenuComponent } from './menu/menu.component';

// const routes: Routes = [
//   { path: 'payment', component: PaymentComponent },
//     // { path: 'cart', component: CartComponent },
//   { path: 'payment-atm', component: PaymentAtmComponent },
//   { path: 'product-detail/:id', component: ProductDetailComponent },
//   // { path: '', component: PaymentComponent},
//   { path: '', component: MenuComponent},
// import { AboutComponent } from './about/about.component';
// import { ListComponent } from './list/list.component';
// import { CartComponent } from './cart/cart.component';
// // import { CartService } from './cart.service';

// import { DetailComponent } from './detail/detail.component';
// const routes: Routes = [
//   {path: "about", component: AboutComponent},
//   {path:"list",component:ListComponent},
//   {path:"cart",component:CartComponent},
//  {path:"detail/:id", component:DetailComponent}
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

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


// export const RoutingComponent=[
//   AboutComponent
// ]

