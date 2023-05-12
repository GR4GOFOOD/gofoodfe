import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { PaymentAtmComponent } from './payment-atm/payment-atm.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
import { DetailComponent } from './detail/detail.component';
import { PremmiumComponent } from './premmium/premmium.component';
import { ContactComponent } from './contact/contact.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { AccountOrderComponent } from './account-order/account-order.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogsDetailComponent } from './blogs-detail/blogs-detail.component';
import { FAQSComponent } from './faqs/faqs.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: "about", component: AboutComponent},
  {path: 'account-detail', component: AccountDetailComponent},
  {path: 'account-edit', component: AccountEditComponent},
  {path: 'account-order', component: AccountOrderComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: 'blogs-detail/:id', component: BlogsDetailComponent},
  {path: 'cart', component: CartComponent },
  {path: 'contact', component: ContactComponent},
  {path:"detail/:id", component: DetailComponent},
  {path: 'faqs', component: FAQSComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'list', component: ListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'payment', component: PaymentComponent },
  {path: 'payment-atm', component: PaymentAtmComponent },
  {path:'premmium', component: PremmiumComponent},
  {path: 'product-detail', component: ProductDetailComponent},
  {path: 'product-detail/:id', component: ProductDetailComponent },
  {path: 'signup', component: SignupComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
   constructor(private router: Router) {}
   // Xử lý khi nhấn vào radio
    //  goToPaymentPage() {
    //    this.router.navigate(['/payment']);
    //  }
    //  goToPaymentAtmPage() {
    //    this.router.navigate(['/payment-atm']);
    //  }
}

export const RoutingComponent=[
  AboutComponent,
  AccountDetailComponent,
  AccountEditComponent,
  AccountOrderComponent,
  BlogsComponent,
  BlogsDetailComponent,
  CartComponent,
  ContactComponent,
  DetailComponent,
  FAQSComponent,
  HomepageComponent,
  ListComponent,
  LoginComponent,
  LogoutComponent,
  MenuComponent,
  NotificationsComponent,
  PaymentComponent,
  PaymentAtmComponent,
  PremmiumComponent,
  ProductDetailComponent,
  SignupComponent
]

