
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './../register/register.component';
import { LoginService } from './login.service';

@NgModule({
  declarations: [ LoginComponent, RegisterComponent ],
  imports: [ CommonModule, FormsModule, HttpModule, ReactiveFormsModule ],
  providers: [ LoginService ],
  // It is a must to export component dus make it visible
  exports: [ LoginComponent ]
})
export class LoginModule { }
