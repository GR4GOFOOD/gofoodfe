import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AboutComponent } from './about/about.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ContactComponent } from './contact/contact.component';
import { PaymentsComponent } from './payments/payments.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { BlogComponent } from './blog/blog.component';
import { FAQSComponent } from './faqs/faqs.component';
import { CartComponent } from './cart/cart.component';









@NgModule({
  declarations: [
    AppComponent,
    NotificationsComponent,
    AboutComponent,
    SignInComponent,
    ContactComponent,
    PaymentsComponent,
    MenuComponent,
    SignupComponent,
    BlogComponent,
    FAQSComponent,
    CartComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
