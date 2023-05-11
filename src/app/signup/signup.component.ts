import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import Validation from '../types/validation';
import { UsersService } from '../service/users.service';
import { Users } from '../types/users';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;
  errMessage:string='';

  constructor(private formBuilder: FormBuilder, private _service: UsersService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        // username: [
        //   '',
        //   [
        //     Validators.required,
        //     Validators.minLength(6),
        //     Validators.maxLength(20)
        //   ]
        // ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  // closeModal(): void {
  //   this.successModalVisible = false;
  // }
  onSubmit(): void {
    this.submitted = true;
    // this.successModalVisible = true;
    console.log("submit",this.form.invalid)
    if (this.form.invalid) {
      return;
    }


    console.log(this.form)
    console.log(JSON.stringify(this.form.value, null, 2));
    {
      this._service.postSignup(this.form.value).subscribe({
        next:(data)=>{this.form=data;
         },

        error:(err)=>{this.errMessage=err}
      })
    }
  }

}
