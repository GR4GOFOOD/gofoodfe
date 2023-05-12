import { Component } from '@angular/core';
import { ProductAPIService } from '../service/product-api.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {

  products:any;
  riceproducts:any;
  cakeproducts:any;
  saladproducts:any;
  drinkproducts:any;
  setsproducts:any;
  bestproducts:any;
  errMessage: string=''

  constructor(private _service: ProductAPIService, private router: Router) {
    this._service.getProducts().subscribe({
      next:(data)=>{

      this.products=data;

      this.riceproducts=data.filter((product: any) => {
        return product.productId >= 31 && product.productId <= 36;
      });

      this.cakeproducts=data.filter((product: any) => {
        return product.productId >= 1 && product.productId <= 6;
      });

      this.saladproducts=data.filter((product: any) => {
        return product.productId >= 41 && product.productId <= 46;
      });

      this.drinkproducts=data.filter((product: any) => {
        return product.productId >= 22 && product.productId <= 27;
      });

      this.setsproducts=data.filter((product: any) => {
        return product.productId >= 70 && product.productId <= 75;
      });

      this.bestproducts = data.filter((product: any) => {
        return product.productId >= 39 && product.productId <= 42
      });},

      error:(err)=>{this.errMessage=err}
      })
  }

  onProductDetails(productId: string){
    console.log(productId)
    this.router.navigate(['/product-detail', productId]);
  }
}
