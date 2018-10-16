import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  template: `
    <h4>Alerts:</h4>
    <app-warning-alert></app-warning-alert>
    <app-success-alert></app-success-alert>
    <app-failed-alert></app-failed-alert>`
})
export class AlertsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
