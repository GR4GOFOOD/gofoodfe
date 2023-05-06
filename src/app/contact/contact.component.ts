import { Component } from '@angular/core';
import { IContact } from 'src/contact';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  showVerify = false
  phoneInvalid = false
  contact: IContact= new IContact()
  contacts:any
  errMessage:string=''
  constructor(private _service: ContactService){}

  toggleModal1() {
    this.showVerify = !this.showVerify
  }

  onSubmit() {
   {
      this._service.postContact(this.contact).subscribe({
        next:(data)=>{this.contact=data},
        error:(err)=>{this.errMessage=err}
      })
    }
    this.showVerify = true;
  }
}
