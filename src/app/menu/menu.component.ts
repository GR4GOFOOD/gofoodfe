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
        return product.ID >= 31 && product.ID <= 36;
      });

      this.cakeproducts=data.filter((product: any) => {
        return product.ID >= 1 && product.ID <= 6;
      });

      this.saladproducts=data.filter((product: any) => {
        return product.ID >= 41 && product.ID <= 46;
      });

      this.drinkproducts=data.filter((product: any) => {
        return product.ID >= 22 && product.ID <= 27;
      });

      this.setsproducts=data.filter((product: any) => {
        return product.ID >= 70 && product.ID <= 75;
      });

      this.bestproducts = data.filter((product: any) => {
        return product.ID >= 39 && product.ID <= 42
      });},

      error:(err)=>{this.errMessage=err}
      })
  }

  onProductDetails(id: number){
    this.router.navigate(['/product-detail', id]);
  }
}


