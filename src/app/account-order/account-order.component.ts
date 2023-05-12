import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account-order',
  templateUrl: './account-order.component.html',
  styleUrls: ['./account-order.component.css']
})
export class AccountOrderComponent {
  constructor(
    private router: Router
  ){}
  openMenu(){
    this.router.navigate(['account-edit'])
  }
  openMenu2(){
    this.router.navigate(['account-order'])
  }
  openMenu3(){
    this.router.navigate(['account-detail'])
  }
  onImage(){

  }
  logOut(){
    this.router.navigate(['homepage'])
  }
  gotoCart(){
    this.router.navigate(['cart'])
  }
  gotoPro(){
    this.router.navigate(['product-detail'])
  }
}
