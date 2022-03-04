import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'windowed-observable';
import { UserService } from '@tps-mfe/data-access-user';

@Component({
  selector: 'tps-mfe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private observable = new Observable('navbar');

  constructor(private userService: UserService, private router: Router) {
    this.observable.subscribe((path) => {
      console.log(`navigate to: ${path}`);
      this.router.navigate([path]);
    });
  }

  ngOnInit(): void {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['login'], { state: { redirect: this.router.url } });
    }
  }
}
