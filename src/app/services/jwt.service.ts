import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor() {}

  getUserName(): any {
    try {
      let token = JSON.parse(localStorage.getItem('token'));
      if (token) {
        let tokenInfo = jwtDecode(token);
        return tokenInfo;
      }
    } catch (Error) {
      return null;
    }
  }
}
