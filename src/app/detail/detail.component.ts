import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { Product } from '../types/Product';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  product: Product | undefined;
  cartItems: Product[] = [];
  cartItemCount: number = 0;
  errmessage: string = "";

  constructor(
    private _service: CartService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this._service.getProductid(id).subscribe(data => {
      this.product = data;
    });
  }

  addToCart(): void {
    console.log('Starting addToCart...');
    console.log('Product:', this.product);

    if (this.product) {
      console.log('Adding product to cart:', this.product);
      this._service.addToCart(this.product);
      this.cartItems = this._service.getCartItems();
    } else {
      console.log('Error adding product to cart: Product is undefined.');

    }
  }

  goBack() {
    this.router.navigate(['/list']);
  }
}

