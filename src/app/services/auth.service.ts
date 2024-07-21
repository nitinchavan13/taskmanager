import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { JWTResponse } from '../models/jwt-response.model';
import { User } from '../models/user.model';
import { ROUTES } from '../route-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userName = signal("");

  constructor(private _http: HttpClient) { }

  login(userModel: User) {
    return this._http.post<JWTResponse>(ROUTES.BASEURL + "auth/login", userModel);
  }

  registerUser(userModel: User) {
    return this._http.post<boolean>(ROUTES.BASEURL + "auth/registerUser", userModel);
  }
}
