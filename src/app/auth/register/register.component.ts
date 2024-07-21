import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  user: User = new User();

  constructor(private _router: Router, private _authService: AuthService, private _toastService: ToastService) {}

  registerUser() {
    this._authService.registerUser(this.user).subscribe((data) => {
      this._toastService.show('', 'Registration Successful.');
      this._router.navigateByUrl('login');
    },(err) => {
      console.log(err);
    });
  }
}
