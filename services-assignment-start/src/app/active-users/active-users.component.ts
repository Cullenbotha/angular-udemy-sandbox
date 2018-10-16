import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: string[];

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }

  constructor(private usersService: UsersService) {}

  ngOnInit(){
    this.users = this.usersService.activeUsers;
  }
}
