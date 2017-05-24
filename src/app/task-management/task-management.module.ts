import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routing } from './task-management.routes.ts';
import { TaskManagementComponent } from './task-management.component.ts';

@NgModule({
  declarations: [
    TaskManagementComponent,
  ],
  imports: [
    routing,
    CommonModule,
    FormsModule,
  ],
  exports: [],
  providers:[],
})
export class TaskManagementModule { }
