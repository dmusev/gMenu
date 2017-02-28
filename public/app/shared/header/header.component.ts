
import { Component } from '@angular/core';
import { LoginService } from './../../components/login/login.service';
import { SharedService } from './../shared.service';

@Component({
  moduleId: module.id,
  selector:    'g-header',
  templateUrl: './header.view.html',
  styleUrls: ['./header.styles.css']
})
export class HeaderComponent {

  constructor(private loginService: LoginService, private sharedService: SharedService ) {}

  logout(): any {
    this.loginService.logout();
  }
}

