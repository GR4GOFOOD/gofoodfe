import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Fashion } from '../types/Fashion';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  fashion: Fashion[]=[];
  fashions: any;
  errMessage: string='';
  constructor(public _service:CartService) {
    this._service.getFashions().subscribe({
      next:(data:Fashion)=>{this.fashions=data},
      error:(err)=>{this.errMessage=err.message},
    })
  }
  addToCart(fashion: Fashion) {
    this._service.addToCart(fashion).subscribe(
      () => {
        console.log('Sản phẩm đã được thêm vào giỏ hàng');
      },
      (err) => {
        console.error('Lỗi khi thêm sản phẩm vào giỏ hàng:', err);
      }
    );
  }
//  fashion:Fashion[] = [];
//   fashions: any;
//   errMessage: string='';
//
//   constructor(public _service:CartService) {}
//   ngOnInit() {
//     this._service.getFashions().subscribe({
//       next:(data:Fashion)=>{this.fashions=data},
//       error:(err)=>{this.errMessage=err.message},
//     })
//   }
// addToCart()
// {
//   this._service.addProductToCart(this.fashion).subscribe({
//     next: (data: Fashion[]) => {
//       this.fashion = data;
//     },
//     error:(err)=>{this.errMessage=err.message},
//   })
// }
//cách 2
  // addToCart(product: any) {
  //   this._service.addProductToCart(product).subscribe({
  //     next: () => {
  //       console.log('Product added to cart successfully');
  //     },
  //     error: (err) => {
  //       console.error('Failed to add product to cart', err);
  //     }
  //   });

  // addToCart(fashion: Fashion) {
  //   this._service.addProductToCart(fashion).subscribe();
  // }
  // addToCart(fashion: Fashion) {
  //   this._service.addProductToCart(fashion).subscribe(
  //     (response) => {
  //       // Xử lý khi thêm sản phẩm vào giỏ hàng thành công
  //     },
  //     (error) => {
  //       console.error('Thêm sản phẩm vào giỏ hàng thất bại', error);
  //       // Xử lý lỗi khi thêm sản phẩm vào giỏ hàng thất bại
  //     }
  //   );
  // }
  // hideDiv() {
  //   this.showDiv = false;
  //   this.showListstyle = false
  // }

}
