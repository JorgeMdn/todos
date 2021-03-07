import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './pages/task/task.component';
import { ListComponent } from './pages/list/list.component';

const COMPONENTS = [TaskComponent, ListComponent];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, TaskRoutingModule],
})
export class TaskModule {}
