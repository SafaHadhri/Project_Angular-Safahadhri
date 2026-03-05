import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: []
})
export class LoginComponent {
  loginForm!: FormGroup
  login: Login = {
    email: "",
    password:""
  }
  ngOnInit(){
    this.loginForm = new FormGroup({
      email: new FormControl(this.login.email, [Validators.required, Validators.email]),
      password: new FormControl(this.login.password, [Validators.required, Validators.minLength(3)])
    })
  }

  get email(){ return this.loginForm.get('email')}
  get password(){ return this.loginForm.get('password')}

  submitForm(){
    console.log('Login Form : ', this.loginForm.value)
  }
}
