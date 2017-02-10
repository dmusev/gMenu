import { Component } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
  moduleId: module.id,
  selector:    'register',
  templateUrl: './register.view.html',
  providers:  [ RegisterService ]
})
export class RegisterComponent {

  constructor(regSerive: RegisterService) {}
}
