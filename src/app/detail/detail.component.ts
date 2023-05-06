import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { Fashion } from '../types/Fashion';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  fashion: Fashion | null = null;

  constructor(
    private _service: CartService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this._service.getFashionid(id).subscribe(data => {
      this.fashion = data;
    });
  }

  addToCart() {
    if (this.fashion) {
      this._service.addToCart(this.fashion).subscribe(
        (response) => {
          console.log('Sản phẩm đã được thêm vào giỏ hàng');
          console.log('Dữ liệu sản phẩm:', this.fashion);
          console.log('Đường dẫn đã được gửi đi:', response.url);
        },
        (err) => {
          console.error('Lỗi khi thêm sản phẩm vào giỏ hàng:', err);
        }
      );
    }
  }
  goBack() {
    this.router.navigate(['/list']);
  }
  // product: Fashion | null = null;
  // fashion: any;
  // constructor(
  //   private _service: CartService,
  //   private activatedRoute: ActivatedRoute,
  //   private CartSerice:CartService,
  //   private router: Router
  // ) {
  //   const id = this.activatedRoute.snapshot.paramMap.get('id');
  //   this. CartSerice.getFashionid(id).subscribe(data => {
  //     this.fashion = data;
  //   });
  // }
  //cách 2
  // addToCart(product: Fashion) {
  //   this.cartService.addToCart(product).subscribe(
  //     () => {
  //       console.log('Sản phẩm đã được thêm vào giỏ hàng');
  //     },
  //     (error) => {
  //       console.error('Lỗi khi thêm sản phẩm vào giỏ hàng:', error);
  //     }
  //   );
  // }
  // addToCart(product: Fashion | null) {
  //   if (product && product._id) {

  //     this._service.addToCart(product).subscribe(
  //       () => {
  //         console.log('Sản phẩm đã được thêm vào giỏ hàng');
  //       },
  //       (err) => {
  //         console.error('Lỗi khi thêm sản phẩm vào giỏ hàng:', err);
  //       }
  //     );
  //   }
  // }

}
