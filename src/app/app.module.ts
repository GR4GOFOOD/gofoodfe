import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { JsonPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
import { RouterModule }  from '@angular/router'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentAtmComponent } from './payment-atm/payment-atm.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FAQSComponent } from './faqs/faqs.component';
import { PremmiumComponent } from './premmium/premmium.component';
import { CartComponent } from './cart/cart.component';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { AccountOrderComponent } from './account-order/account-order.component';
import { BlogsDetailComponent } from './blogs-detail/blogs-detail.component'
import { BlogsComponent } from './blogs/blogs.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotificationsComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    SignupComponent,
    BlogsComponent,
    PaymentComponent,
    PaymentAtmComponent,
    HomepageComponent,
    FAQSComponent,
    CartComponent,

    PremmiumComponent,
    ProductDetailComponent,
    LoginComponent,
    LogoutComponent,
    AccountDetailComponent,
    AccountEditComponent,
    AccountOrderComponent,
    BlogsDetailComponent,
    BlogsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    JsonPipe,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

