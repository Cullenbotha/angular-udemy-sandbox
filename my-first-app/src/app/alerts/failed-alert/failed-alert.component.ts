import { Component } from '@angular/core';

@Component({
  selector: 'app-failed-alert',
  template: '<p>This action has failed :( Please try again later</p>',
  styles: [`
    p {
      border: 2px solid #cc4b4b;
      border-radius: 5px;
      background-color: #ff8484;
      font-weight: bold;
      padding: 3px 5px 3px 5px;
    }
  `]
})

export class FailedAlertComponent {

}
