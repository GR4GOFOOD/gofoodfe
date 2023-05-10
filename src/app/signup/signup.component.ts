import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UsersService } from '../service/users.service';
import { IUsers } from '../types/users';
import Validation from '../types/validation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   IUsers: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;
  errMessage: string = '';

  constructor(private formBuilder: FormBuilder, private userService: UsersService) {}

  ngOnInit(): void {
    this.IUsers = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validators: [Validation.match('password', 'confirmPassword')]
    });
  }

  get f() {
    return this.IUsers.controls;
  }

  onSubmit() {
    this.submitted = true;

  if (this.IUsers.invalid) {
    return;
  }

  this.userService.postSignup(this.IUsers).subscribe(
    (data) => {
      // Handle the successful response from the backend
      // Save the data to the database or perform any other necessary actions
      console.log('Data saved:', data);
    },
    (error) => {
      // Handle the error response from the backend, if needed
      this.errMessage = error.message;
    }
  );


  }
}
