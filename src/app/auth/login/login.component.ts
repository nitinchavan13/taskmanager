import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  user: User = new User();

  constructor(private _router: Router, private _authService: AuthService, private _toastService: ToastService) {}
  loginUser() {
    this._authService.login(this.user).subscribe((data) => {
      this._toastService.show('', 'Login Successful.')
      localStorage.setItem("token", JSON.stringify(data.Token));
      this._router.navigateByUrl('task-management/dashboard');
    },(err) => {
      console.log(err);
    });
  }
}
