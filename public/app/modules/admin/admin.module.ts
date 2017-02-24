import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRouting } from './admin.routing';

@NgModule({
  imports: [ CommonModule, FormsModule, HttpModule, AdminRouting ],
  declarations: [ AdminComponent ]
})
export class AdminModule { }

