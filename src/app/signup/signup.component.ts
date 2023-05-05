import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.pattern('[a-zA-Z0-9]+')],
      email: ['', Validators.email],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.minLength(6)],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('Submitted');
    console.log('Form Data:', this.signUpForm.value);
  }


}
