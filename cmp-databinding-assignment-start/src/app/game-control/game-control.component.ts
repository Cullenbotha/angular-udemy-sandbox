import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  count = 0;
  interval;
  gameInProgress = false;
  @Output() gameEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.gameInProgress = true;
    this.interval = setInterval(() => {
      this.gameEvent.emit(this.count += 1);
    }, 1000);
  }

  stopGame() {
    this.gameInProgress = false;
    clearInterval(this.interval);
  }
}
