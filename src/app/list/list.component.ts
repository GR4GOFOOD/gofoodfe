import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Product } from '../types/Product';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  product: Product[]=[];
  products: any;
  errMessage: string='';
  constructor(private _service:CartService) {
    this._service.getProducts().subscribe({
      next:(data:Product)=>{this.products=data},
      error:(err)=>{this.errMessage=err.message},
    })
  }

}


