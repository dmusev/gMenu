
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [ LoginComponent ],
  imports: [ CommonModule, FormsModule, HttpModule ],
  // It is a must to export component dus make it visible
  exports: [ LoginComponent ]
})
export class LoginModule { }
