import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { Task } from '../models/task.model';
import { CommonModule, DatePipe } from '@angular/common';
import { LimitWordPipe } from '../pipes/limit-word.pipe';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [LimitWordPipe, DatePipe, CommonModule, NgbModalModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input() item: Task;
  @Output() updateTasks = new EventEmitter<boolean>(false);
  taskInfo: Task;

  private modalService = inject(NgbModal);

  constructor(private _router: Router, private _taskService: TaskService, private _toastService: ToastService) {}

  gotoTaskDetails() {
    this._router.navigateByUrl('/task-management/task-details/' + this.item.Id);
  }

  openTaskModel(content: TemplateRef<any>) {
    this.taskInfo = JSON.parse(JSON.stringify(this.item));
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  deleteTask() {
    this._taskService.deleteTask(this.item.Id).subscribe(() => {
      this._toastService.show('', 'Task deleted successfully!');
      this.modalService.dismissAll();
      this.updateTasks.emit(true);
    });
  }

  updateTask() {
    this._taskService.updateTask(this.taskInfo).subscribe(() => {
      this._toastService.show('', 'Task updated successfully!');
      this.modalService.dismissAll();
      this.updateTasks.emit(true);
    });
  }
}
