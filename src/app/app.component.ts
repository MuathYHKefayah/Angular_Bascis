import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username = '';
  show_text = false;
  logs = [];

  onReset() {
    this.username = '';
  }

  logClicks(){
    this.logs.push( new Date());

  }

}
