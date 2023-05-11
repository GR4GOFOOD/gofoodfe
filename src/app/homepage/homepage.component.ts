import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductAPIService } from '../service/product-api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  products: any;
  bestproducts: any;
  errMessage: string=''

  constructor(private _service: ProductAPIService, private router: Router) {
    this._service.getProducts().subscribe({
      next:(data)=>{
        this.products=data;

        this.bestproducts = data.filter((product: any) => {
          return product.productId >= 39 && product.productId <= 42
        });},

        error:(err)=>{this.errMessage=err}
         })
        }

      //   onProductDetails(id: string){
      //   this.router.navigate(['/product-detail', id]);
      // }

      onProductDetails(id: string) {
        this.router.navigate(['/product-detail', id]);
      }

}
