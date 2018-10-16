import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddArray = [];
  evenArray = [];

  assignGameEvent(eventValue) {
    if (eventValue % 2 == 0) {
      this.evenArray.push(eventValue);
    } else {
      this.oddArray.push(eventValue);
    }
  }
}
