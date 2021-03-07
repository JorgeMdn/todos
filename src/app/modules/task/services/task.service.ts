import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  list = [{ id: 0, title: 'Tarea', description: 'Descripción', done: false }];
  constructor() {}
}
