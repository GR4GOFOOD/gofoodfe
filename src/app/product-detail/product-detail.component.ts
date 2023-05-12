import { Component, OnInit  } from '@angular/core';
import { ProductAPIService } from '../service/product-api.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  isToggle:any;
  constructor(private _service: ProductAPIService,private router:Router){
  }

    ngOnInit(): void {}

    // product:any;
    // errMessage:string='';

    // getProductId(productId:string)
    // {
    // this._service.getProduct(productId).subscribe({
    // next:(data)=>{this.product=data},
    // error:(err)=>{this.errMessage=err}
    // })
    // }

    // this._service.postSignup(this.form.value).subscribe({
    //   next:(data)=>{this.form=data;
    //    },

    //   error:(err)=>{this.errMessage=err}
    // })



}


