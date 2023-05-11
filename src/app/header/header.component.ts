import { Component, OnInit } from '@angular/core';
import { ProductAPIService } from '../service/product-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  showHomepage = true
  showSearch = false
  hide(){
    this.showHomepage = false,
    this.showSearch=false
  }

  constructor(public _service: ProductAPIService){}
  foods:any
  searchFood(name:string){
    this._service.getSearch(name).subscribe({
      next:(data)=>{this.foods=data}
  })
  this.showSearch=true
}
toggleModal() {
  this.showSearch = !this.showSearch
}
hideModal(){
  this.showSearch = !this.showSearch
}
}


