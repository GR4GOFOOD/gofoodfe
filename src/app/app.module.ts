import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule }  from '@angular/router'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AboutComponent } from './about/about.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { BlogComponent } from './blog/blog.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentAtmComponent } from './payment-atm/payment-atm.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FAQSComponent } from './faqs/faqs.component';
<<<<<<< HEAD
import { PremmiumComponent } from './premmium/premmium.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';












=======

import { CartComponent } from './cart/cart.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
>>>>>>> bafa6078f040833fb5215756db8dedd4380339a4
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotificationsComponent,
    AboutComponent,
    SignInComponent,
    ContactComponent,
    MenuComponent,
    // SignupComponent,
    BlogComponent,
    PaymentComponent,
    PaymentAtmComponent,
    ProductDetailComponent,
    HomepageComponent,
    FAQSComponent,
<<<<<<< HEAD
    PremmiumComponent,
    ProductDetailComponent,
    CartComponent,




=======

    CartComponent,
    ListComponent,
    DetailComponent,
>>>>>>> bafa6078f040833fb5215756db8dedd4380339a4
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    ReactiveFormsModule,
=======
    HttpClientModule
>>>>>>> bafa6078f040833fb5215756db8dedd4380339a4
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
