import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { TaskComponent } from './pages/task/task.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'task', component: TaskComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
