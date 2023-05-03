import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AboutComponent } from './about/about.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { BlogComponent } from './blog/blog.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentAtmComponent } from './payment-atm/payment-atm.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationsComponent,
    AboutComponent,
    SignInComponent,
    ContactComponent,
    MenuComponent,
    SignupComponent,
    BlogComponent,
    PaymentComponent,
    PaymentAtmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
