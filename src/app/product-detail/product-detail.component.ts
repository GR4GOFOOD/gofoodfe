import { Component, OnInit  } from '@angular/core';
import { ProductAPIService } from '../service/product-api.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  isToggle:any;
  constructor(private _service: ProductAPIService){
  }

    ngOnInit(): void {}

    product:any;
    errMessage:string=''

    getProductId(productId:string)
    {
    this._service.getProduct(productId).subscribe({
    next:(data)=>{this.product=data},
    error:(err)=>{this.errMessage=err}
    })
    }
}
