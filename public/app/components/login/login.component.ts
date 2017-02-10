import {Component} from '@angular/core';
import {LoginService} from './login.service';

@Component({
  moduleId: module.id,
  selector:    'login',
  templateUrl: './login.view.html',
  providers:  [LoginService]
})
export class LoginComponent {
  instUrl:string;

  constructor(loginService: LoginService){
    this.instUrl = loginService.getInstagralUrl();
  }

  public reqInst() {

  }
}
