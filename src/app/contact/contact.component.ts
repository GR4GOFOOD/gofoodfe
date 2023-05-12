import { Component } from '@angular/core';
import { IContact } from 'src/app/types/contact';
import { ContactService } from '../service/contact.service';
import { ISupport } from '../types/supports';
import { SupportsService } from '../service/supports.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  showModal = false
  showVerify = false
  toggleModal() {
    this.showModal = !this.showModal;
  }
  toggleModal1() {
    this.showVerify = !this.showVerify
  }

  openContact(){
    this.showModal = true
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
