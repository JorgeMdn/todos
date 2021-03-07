import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './pages/task/task.component';
import { ListComponent } from './pages/list/list.component';
import { SharedModule } from 'src/app/@shared/shared.module';

const MODULES = [CommonModule, TaskRoutingModule, SharedModule];

const COMPONENTS = [TaskComponent, ListComponent];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
})
export class TaskModule {}
