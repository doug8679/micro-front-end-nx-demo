import { Component, OnInit } from '@angular/core';
import { UserService } from '@tps-mfe/data-access-user';
import { Observable } from 'windowed-observable';

@Component({
  selector: 'tps-mfe-remits',
  templateUrl: 'remits.component.html',
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemitsComponent implements OnInit {
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    const user = this.userService.getUser();
    if (!user || !user.roles.includes('remits')) {
      const observable = new Observable('navbar');
      observable.publish('');
    }
  }
}

