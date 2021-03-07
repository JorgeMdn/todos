import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TaskInterface } from '../../data/task.interface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  action: string;
  task: TaskInterface;
  index: number;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public _tasksService: TaskService
  ) {
    this._route.queryParamMap.subscribe((params: ParamMap) => {
      this.action = params.get('action');
      if (this.action == 'a') {
        this.task = {
          id: this._tasksService.list.length + 1,
          title: '',
          description: '',
          done: false,
        };
      }
      if (this.action == 'e') {
        let i = parseInt(params.get('index'));
        this.index = i;
        this.task = {
          id: this._tasksService.list[i].id,
          title: this._tasksService.list[i].title,
          description: this._tasksService.list[i].description,
          done: this._tasksService.list[i].done,
        };
      }
    });
  }

  ngOnInit() {}
  cancel = () => {
    this.task = {
      id: this._tasksService.list.length + 1,
      title: '',
      description: '',
      done: false,
    };
  };

  save = () => {
    if (this.action == 'a') {
      this._tasksService.list.push(this.task);
    } else if (this.action == 'e') {
      this._tasksService.list[this.index] = this.task;
    }
    this._router.navigate(['/', 'tasks']);
  };
}
