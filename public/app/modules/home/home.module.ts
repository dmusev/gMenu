import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [ CommonModule, FormsModule, HttpModule, HomeRouting ]
})
export class HomeModule { }

