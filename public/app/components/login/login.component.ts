import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector:    'login',
  templateUrl: './login.view.html',
  styleUrls: ['./login.styles.css'],
  providers:  [ LoginService ]
})
export class LoginComponent implements OnInit {
  loading = false;
  returnUrl: string;

  user = {
    name: '',
    password: ''
  };

  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService) {}

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  submitLogin(): any { // Log user in
    this.loading = true;
    this.loginService.login(this.user.name, this.user.password)
        .subscribe(
            data => {
                let userInfo = JSON.parse(localStorage.getItem('currentUser'));
                let userRole = userInfo ? userInfo.role : '';
                this.loginService.navigate(userRole);
            },
            error => {
                console.error(error);
                this.loading = false;
            });
  }
}
