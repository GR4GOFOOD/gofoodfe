import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  errMessage: string = "";
  cartItems: any[] = [];
  tamTinh: number = 0;
  thue: number = 0;
  tongCong: number = 0;

  constructor(private _service: CartService, private router:Router) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartItems = this._service.getCartItems();
    console.log('Cart Items:', this.cartItems);
    this.calculateTamTinh();
    console.log('Tam Tinh:', this.tamTinh);
    this.calculateThue();
    console.log('Thue:', this.thue);
    this.calculateTongCong();
    console.log('Tong Cong:', this.tongCong);
  }

  calculateTamTinh(): void {
    this.tamTinh = 0;

    for (let item of this.cartItems) {
      this.tamTinh += item.PRICE * item.QUANTITY;
    }

    console.log('Tam Tinh:', this.tamTinh);
  }

  calculateThue(): void {
    this.thue = this.tamTinh * 0.05;
    console.log('Thue:', this.thue);
  }

  calculateTongCong(): void {
    this.tongCong = this.tamTinh + this.thue;
    console.log('Tong Cong:', this.tongCong);
  }
  removeProduct(item: any): void {
    this._service.removeCartItem(item);
    this.loadCartItems();
  }
  updateCartItem(item: any): void {
    this._service.updateCartItem(item);
    this.calculateTamTinh();
    this.calculateThue();
    this.calculateTongCong();
  }
  payMent(){
    this.router.navigate(['payment'])

  }

}


