import { Component, effect, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { JwtService } from '../services/jwt.service';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent implements OnInit {
  userName: string = '';

  constructor(private _router: Router, private _jwtService: JwtService) {}

  ngOnInit(): void {
      this.userName = this._jwtService.getUserName()?.username;
  }

  signOut() {
    localStorage.clear();
    this._router.navigateByUrl('login');
  }
}
