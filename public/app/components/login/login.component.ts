import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector:    'login',
  templateUrl: './login.view.html',
  styleUrls: ['./login.styles.css'],
})
export class LoginComponent implements OnInit {
  loading = false;
  returnUrl: string;
  loginForm: FormGroup;
  userNotFound = false;

  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService,
    private fb: FormBuilder) {
       this.loginForm = fb.group({
        // To add a validator, we must first convert the string value into an array.
        // The first item in the array is the default value if any, then the next item
        // in the array is the validator. Here we are adding a required validator meaning
        // that the firstName attribute must have a value in it.
        'username' : [null, Validators.required],
        // We can use more than one validator per field. If we want to use more than one validator
        // we have to wrap our array of validators with a Validators.compose function. Here we are
        // using a required, minimum length and maximum length validator.
        'password': [null, Validators.compose([Validators.required, Validators.minLength(5)])]
      });
    }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  submitLogin(userCred: any): any { // Log user in
    this.loading = true;
    this.loginService.login(userCred)
        .subscribe(
            data => {
                let userInfo = JSON.parse(localStorage.getItem('currentUser'));
                let userRole = userInfo ? userInfo.role : '';
                this.userNotFound = false;
                this.loginService.navigate(userRole);
            },
            error => {
                console.error(error);
                this.userNotFound = true;
                this.loading = false;
            });
  }
}
