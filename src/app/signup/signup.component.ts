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

  // form: FormGroup = new FormGroup({
  //   username: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   acceptTerms: new FormControl(false),
  // });
  // submitted = false;
  // UsersService: any;

  // constructor(private formBuilder: FormBuilder) {}

  // ngOnInit(): void {
  //   this.form = this.formBuilder.group(
  //     {
  //       username: [
  //         '',
  //         [
  //           Validators.required,
  //           Validators.minLength(6),
  //           Validators.maxLength(20)
  //         ]
  //       ],
  //       email: ['', [Validators.required, Validators.email]],
  //       password: [
  //         '',
  //         [
  //           Validators.required,
  //           Validators.minLength(6),
  //           Validators.maxLength(40)
  //         ]
  //       ],
  //       confirmPassword: ['', Validators.required],
  //       acceptTerms: [false, Validators.requiredTrue]
  //     },
  //     {
  //       validators: [Validation.match('password', 'confirmPassword')]
  //     }
  //   );
  // }

  // get f(): { [key: string]: AbstractControl } {
  //   return this.form.controls;
  // }

  // onSubmit(): void {
  //   this.submitted = true;

  //   if (this.form.invalid) {
  //     return;
  //   }

  //   const user: Users = new Users(
  //     null,
  //     this.f.username.value,
  //     this.f.email.value,
  //     this.f.password.value
  //   );

  //   this.UsersService.postSignup(user).subscribe(
  //     () => {
  //       console.log('Đăng ký thành công');
  //       // Thực hiện các hành động sau khi đăng ký thành công, ví dụ: chuyển hướng, hiển thị thông báo, vv.
  //       // Ví dụ:
  //       // - Hiển thị thông báo đăng ký thành công
  //       // - Chuyển hướng đến trang chủ
  //     },
  //     error => {
  //       console.error('Lỗi đăng ký', error);
  //       // Xử lý lỗi đăng ký, ví dụ: hiển thị thông báo lỗi, vv.
  //       // Ví dụ:
  //       // - Hiển thị thông báo lỗi
  //     }
  //   );
//   user =new Users();
//   errMessage:string=''

//   constructor(public _service: UsersService) {}
//   public setFashion(u:Users)
//   {
//   this.Users=u
//   }
//   postFashion()
// {
// this._service.postFashion(this.fashion).subscribe({
// next:(data)=>{this.fashion=data},
// error:(err)=>{this.errMessage=err}
// })
// }
}




