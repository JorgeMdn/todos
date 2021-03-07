import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { TaskInterface } from '../../data/task.interface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(
    public _tasksService: TaskService,
    private _router: Router,
    private _authService: AuthService
  ) {}

  ngOnInit() {}

  edit = (task: TaskInterface, i: number) => {
    this._router.navigate(['/', 'tasks', 'task'], {
      queryParams: {
        action: 'e',
        index: i,
      },
    });
  };
  delete = (task: TaskInterface, i: number) => {
    this._tasksService.list.splice(i, 1);
  };
  add = () => {
    this._router.navigate(['/', 'tasks', 'task'], {
      queryParams: {
        action: 'a',
      },
    });
  };
  logout = () => {
    this._authService.logout();
  };
}
