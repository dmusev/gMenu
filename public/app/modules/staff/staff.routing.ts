import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffComponent } from './staff.component';

const routes: Routes = [
  { path: '', component: StaffComponent }
];

export const StaffRouting: ModuleWithProviders = RouterModule.forChild(routes);
