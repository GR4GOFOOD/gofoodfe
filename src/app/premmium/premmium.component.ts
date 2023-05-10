import { Component } from '@angular/core';
import { ISupport } from 'src/app/types/supports';
import { SupportsService } from '../service/supports.service';

@Component({
  selector: 'app-premmium',
  templateUrl: './premmium.component.html',
  styleUrls: ['./premmium.component.css']
})
export class PremmiumComponent {
  showModal = false
  showVerify = false
  showq1 =false
  showq2 =false
  showq3 =false
  showq4 =false
  showq5 =false

  toggleModal() {
    this.showModal = !this.showModal;
  }
  toggleModal1() {
    this.showVerify = !this.showVerify
  }

  openModal(){
    this.showModal = true
  }

  show1(){
    this.showq1 = true
  }

  show2(){
    this.showq2 = true
  }

  show3(){
    this.showq3 = true
  }

  show4(){
    this.showq4 = true
  }

  show5(){
    this.showq5 = true
  }

  support: ISupport= new ISupport()
  supports: any
  errMessage:string=''
  constructor(private _service: SupportsService){
  }

  onSubmit() {
   {
    this._service.postSupport(this.support).subscribe({
      next:(data)=>{this.support=data},
      error:(err)=>{this.errMessage=err}
    })
    }
    this.showVerify = true;
    this.showModal = false
  }
}
