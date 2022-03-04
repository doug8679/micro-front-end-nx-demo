import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@tps-mfe/data-access-user';
import { Observable } from 'windowed-observable';

@Component({
  selector: 'tps-mfe-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };

  constructor(private userService: UserService, private router: Router) {}
  
  ngOnInit(): void {
    if (this.userService.isLoggedIn()) {
      const observable = new Observable('navbar');
      const { redirect } = window.history.state;
      console.log(`Redirecting back to: "${redirect}"`);
      observable.publish(redirect);
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;
    this.userService.checkCredentials(username, password);
  }
}
