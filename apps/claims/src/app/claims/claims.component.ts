import { Component, OnInit } from '@angular/core';
import { UserService } from '@tps-mfe/data-access-user';
import { Observable } from 'windowed-observable';
import { ClaimsClientService } from '@tps-mfe/claims-api';

@Component({
  selector: 'tps-mfe-claims',
  templateUrl: 'claims.component.html',
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
export class ClaimsComponent implements OnInit {
  constructor(private userService: UserService, private claimsClient: ClaimsClientService) {}
  ngOnInit(): void {
    const user = this.userService.getUser();
    if (!user || !user.roles.includes('claims')) {
      const observable = new Observable('navbar');
      observable.publish('');
    }
  }
}
