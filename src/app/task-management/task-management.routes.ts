import { TaskManagementComponent } from './task-management.component.ts';
import { Routes, RouterModule } from '@angular/router';

export const routes = [
  { path: 'tasks',  component: TaskManagementComponent },
];

export const routing = RouterModule.forChild(routes);
