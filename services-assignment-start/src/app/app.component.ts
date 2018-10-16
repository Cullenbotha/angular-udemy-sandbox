import { Component, OnInit } from '@angular/core';
import { UsersService } from "./users.service";
import { CounterService } from "./counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent implements OnInit {
  activeToInactive;
  inactiveToActive;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.activeToInactive = this.counterService.activeToInactive;
    this.inactiveToActive = this.counterService.inactiveToActive;
  }
}
