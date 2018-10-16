import { Injectable, EventEmitter } from '@angular/core';
import { CounterService } from "./counter.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  activeToInactiveEvent = new EventEmitter();
  inactiveToActiveEvent = new EventEmitter();

  setToActive(id) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);

    this.counterService.incrementInactiveToActive();
  }

  setToInactive(id) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);

    this.counterService.incrementActiveToInactive();
  }

  constructor(private counterService: CounterService) { }
}
