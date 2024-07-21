import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  toasts = [];
  title = 'taskManager';

  constructor(public toastService: ToastService){}
}
