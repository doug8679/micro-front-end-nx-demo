import { Injectable } from '@angular/core';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUser(): User | null {
    const user = window.sessionStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  isLoggedIn() {
    return window.sessionStorage.getItem('loggedIn');
  }

  checkCredentials(username: string, password: string) {
    if (username === 'basic' && password === 'basic') {
      // user is logged in with basic capabilities, need to define roles.
      window.sessionStorage.setItem('loggedIn', 'true');
      window.sessionStorage.setItem('user', JSON.stringify(
        {
          username: 'basic',
          roles: ['viewer']
        }
      ));
    } else if (username === 'admin' && password === 'admin') {
      window.sessionStorage.setItem('loggedIn', 'true');
      window.sessionStorage.setItem('user', JSON.stringify(
        {
          username: username,
          roles: ['viewer', 'claims', 'remits', 'reports']
        }
      ));
    }
  }

  logout() {
    window.sessionStorage.clear();
  }
}
