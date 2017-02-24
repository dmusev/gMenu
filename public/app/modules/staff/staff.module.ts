import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StaffRouting } from './staff.routing';
import { StaffComponent } from './staff.component';

@NgModule({
  declarations: [ StaffComponent ],
  imports: [ CommonModule, FormsModule, HttpModule, StaffRouting ]
})
export class StaffModule { }

