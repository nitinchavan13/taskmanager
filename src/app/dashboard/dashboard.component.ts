import { Component, effect, inject, OnInit, TemplateRef } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
import { TaskFilterPipe } from '../pipes/task-filter.pipe';
import { TaskComponent } from '../task/task.component';
import { RouterOutlet } from '@angular/router';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TaskFilterPipe, TaskComponent, RouterOutlet, NgbModalModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  private modalService = inject(NgbModal);
  newTask: Task;
  
  tasks: Task[] = [];

  constructor(private _taskService: TaskService, private _toastService: ToastService){}

  ngOnInit(): void {
      this.getAllTasks();
  }

  getAllTasks() {
    this._taskService.getAllTasks().subscribe((data) => {
      this.tasks = data;
    })
  }

  openAddTaskModel(content: TemplateRef<any>) {
    this.newTask = new Task();
    this.newTask.Status = "TODO";
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  addTask(form: any) {
    this._taskService.createTask(this.newTask).subscribe((data) => {
      this._toastService.show('', 'Task created successfully!');
      this.modalService.dismissAll();
      this.getAllTasks();
    })
  }

  updateTask(status) {
    if(status) {
      this.getAllTasks();
    }
  }
}
