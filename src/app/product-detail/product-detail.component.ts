import { Component, OnInit  } from '@angular/core';
import { ProductAPIService } from '../service/product-api.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../types/Product';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  cartItems: Product[] = [];
  isToggle:any;
  product:any;
  counterValue = 1;
  constructor(private activateRoute:ActivatedRoute,private _service: ProductAPIService,
    private cartService: CartService,private router:Router){
    // activateRoute.paramMap.subscribe(
    //   (param)=>{
    //     let id=param.get('productId')
    //     if(id!=null)
    //     {
    //     this.selectedProduct=_service.getProduct(id)
    //     }
    //   }
    //   )
    const id= this.activateRoute.snapshot.paramMap.get('id');
    this._service.getProduct(id).subscribe(data=>{this.product=data})
  }

    // ngOnInit(): void {}
    decreaseCounter() {
      if (this.counterValue > 1) {
        this.counterValue--;
      }
    }

    increaseCounter() {
      this.counterValue++;
    }
    goBack(){
      this.router.navigate(['menu'])
      }

      addToCart(): void {
        console.log('Starting addToCart...');
        console.log('Product:', this.product);

        if (this.product) {
          console.log('Adding product to cart:', this.product);
          this.cartService.addToCart(this.product);
          this.cartItems = this.cartService.getCartItems();
        } else {
          console.log('Error adding product to cart: Product is undefined.');

        }
      }




}


