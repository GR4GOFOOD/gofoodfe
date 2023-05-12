import { Component, OnInit  } from '@angular/core';
import { ProductAPIService } from '../service/product-api.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  isToggle:any;
  selectedProduct:any;
  constructor(private activateRoute:ActivatedRoute,private _service: ProductAPIService,private router:Router){
    activateRoute.paramMap.subscribe(
      (param)=>{
        let id=param.get('productId')
        if(id!=null)
        {
        this.selectedProduct=_service.getProduct(id)
        }
      }
      )
  }

    ngOnInit(): void {}

    goBack(){
      this.router.navigate(['menu'])
      }




}


