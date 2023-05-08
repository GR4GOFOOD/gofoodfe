import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Fashion } from '../types/Fashion';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent   {
  cartItems: any[] = [];
  errMessage: string='';
  constructor(private _service: CartService) {}
  ngOnInit(): void {
    this.getCartItems();
  }
  getCartItems(): void {
    this._service.getCart().subscribe(
      (data) => {
        this.cartItems = data;
        console.log('Sản phẩm đã được thêm vào giỏ hàng');
        console.log(this.cartItems);
        console.log('Đường dẫn hiện tại của giỏ hàng:', this._service.cartUrl);
      },
      (err) => {
        console.error('Lỗi khi lấy danh sách sản phẩm trong giỏ hàng:', err);
      }
    );
  }

}
