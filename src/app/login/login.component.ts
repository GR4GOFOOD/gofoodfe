import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AccountAPIService } from '../service/account-api.service';
import { Router } from '@angular/router';
import { response } from 'express';
import { IUser } from '../types/Account';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  // form!: FormGroup;

  //cũ
  // loginForm: NgForm;
  isSubmitted = true;
  errMessage: string='';
  user: IUser = new IUser()
  users: any
  constructor(
    private _service: AccountAPIService,
    private router: Router ) {}

    // ngOnInit(): void {
    //   this.loginForm = new FormGroup({
    //     email: new FormControl('', [Validators.required, Validators.email]),
    //     password: new FormControl('', Validators.required)
    //   });
    // }


    goTo(){
      this.router.navigate(['contact'])
    }
    onSubmit() {
    this._service.postLogin(this.user).subscribe(
      response =>{
        console.log(response);
        const user = response;
        localStorage.setItem('password', user.password);
        localStorage.setItem('Email', user.Email);
        // this.router.navigate(['/accounts'])
      }
    )


    // const account = this._service.
    // const email =  new FormControl('', [Validators.required, Validators.email])
    // const password = new FormControl('', Validators.required)
    // const account = {
    //   email: email,
    //   password: password
    // };
    // this._service.postLogin(account).subscribe((data) => {
    //     this.accounts = data;
    //     this.router.navigate(['account-detail'])
    //     // handle success here
    //   },
    //   (err) => {
    //     this.errMessage = err.error.message;
    //     // handle error here
    //   }
    // )
  }
}

