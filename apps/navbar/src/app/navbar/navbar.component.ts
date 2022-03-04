import { Component } from '@angular/core';
import { Observable } from 'windowed-observable';
import { UserService } from '@tps-mfe/data-access-user';

@Component({
  selector: 'tps-mfe-navbar',
  templateUrl: 'navbar.component.html',
  styles: [ ],
})
export class NavbarComponent {
  
  constructor(private userService: UserService) {}
  
  navigate(path: string) {
    const observable = new Observable('navbar');
    console.log(`Publishing event on scope "navbar" to navigate to "${path}"`);
    observable.publish(path);
  }

  logout(): void {
    this.userService.logout();
    const observable = new Observable('navbar');
    observable.publish('');
  }

  loggedIn() {
    return this.userService.isLoggedIn();
  }

  getUsername() {
    const user = this.userService.getUser();
    if (user) {
      return user.username;
    }
    return '';
  }
}
