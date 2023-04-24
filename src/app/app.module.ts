import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ContactComponent } from './contact/contact.component';
import { PaymentsComponent } from './payments/payments.component';
import { SignupComponent } from './signup/signup.component';
import { BlogComponent } from './blog/blog.component';




@NgModule({
  declarations: [
    AppComponent,
    SignInComponent
    ContactComponent,
    PaymentsComponent,
    SignupComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
