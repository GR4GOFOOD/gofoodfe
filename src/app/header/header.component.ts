import { Component, OnInit } from '@angular/core';
import { ProductAPIService } from '../service/product-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  showHomepage = true
  show = false
  hide(){
    this.showHomepage = false,
    this.show=false
  }

  constructor(public _service: ProductAPIService, public router : Router){}
  foods:any
  searchFood(name:string){
    this._service.getSearch(name).subscribe({
      next:(data)=>{this.foods=data}
  })
  this.show=true
}
toggleModal() {
  this.show =  false
}
hideModal(){
  this.show =  false
}
hideModalAndNavigate() {
  this.hideModal();
  this.router.navigateByUrl('/product-detail');
}
}


