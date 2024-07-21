import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ROUTES } from '../route-constants';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = signal<Task[]>([]);

  constructor(private _http: HttpClient) {}

  getAllTasks() {
    return this._http.get<Task[]>(ROUTES.BASEURL + 'task/getAll');
  }

  createTask(task: Task) {
    return this._http.post(ROUTES.BASEURL + 'task/addTask', task);
  }

  deleteTask(id: number) {
    return this._http.delete(ROUTES.BASEURL + 'task/deleteTask/' + id);
  }

  updateTask(task: Task) {
    return this._http.put(ROUTES.BASEURL + 'task/updateTask', task);
  }
}
