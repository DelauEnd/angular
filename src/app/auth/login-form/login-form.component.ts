import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserForAuthenticationDto } from 'src/app/shared/interfaces/requestInterfaces/otherInterfaces';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  
  loginFailed: boolean = false;

  loginSub: Subscription = new Subscription();

  constructor( private formBuilder: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  isControlValid(controlName: string)
  {
    let control = this.loginForm.controls[controlName]
    return control.invalid && control.touched;
  }

  isFormValid(){
    return this.loginForm.valid;
  }

  login(){
    let controls = this.loginForm.controls;

    let customerToCreate: UserForAuthenticationDto = {
        userName: controls["login"].value,
        password: controls["password"].value
    }

    this.loginSub = this.auth.login(customerToCreate).subscribe(    
      (customer) => {
        console.log("read ok", customer)
      },
      (error) => this.loginFailed = true
    )
  }
}