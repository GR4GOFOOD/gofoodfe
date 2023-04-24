import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentsComponent } from './payments/payments.component';
<<<<<<< HEAD
import { MenuComponent } from './menu/menu.component';
=======
import { SignupComponent } from './signup/signup.component';

>>>>>>> 13eed8f3ea93b6209c306eb4f7788236ff9443fa

@NgModule({
  declarations: [
    AppComponent,
    PaymentsComponent,
<<<<<<< HEAD
    MenuComponent
=======
    SignupComponent
>>>>>>> 13eed8f3ea93b6209c306eb4f7788236ff9443fa
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
