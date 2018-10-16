import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .whiteColor {
      color: white;
    }
  `]
})
export class AppComponent {
  hidePassword = false;
  toggles = [];
  count = 0;

  toggleHidePassword() {
    this.hidePassword = !this.hidePassword;
    this.count += 1;
    this.toggles.push("Clicked " + this.count + " time(s) @ " + new Date());
  }

  getColor(index) {
    return index >= 4 ? 'blue' : 'transparent';
  }
}
