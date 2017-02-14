/**
 * Created by User on 2.2.2017 г..
 */
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';

import { LoginComponent } from './../../components/login/login.component';

@NgModule({
  declarations: [ HomeComponent, LoginComponent ],
  imports: [ FormsModule, HttpModule ],
  // It is a must to export component dus make it visible
  exports: [ HomeComponent ]
})
export class HomeModule { }

