import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null,[Validators.required]),
    cpass: new FormControl(null,[Validators.required])
  })
  constructor(private _router: Router,private _userService: UserService) { }

  ngOnInit(): void {
  }
  register(){
    if(!this.registerForm.valid || this.registerForm.controls.password.value != this.registerForm.controls.cpass.value){
      console.log('Invalid Details');
      return;
    }
    this._userService.register(JSON.stringify(this.registerForm.value))
    .subscribe(data=> {console.log(data); this._router.navigate(['/login'])},
    error=> {console.log(error);})
    console.log(JSON.stringify(this.registerForm.value));

  }
}
