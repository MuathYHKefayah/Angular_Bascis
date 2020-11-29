import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles:[`
    .highlight{
      color: white;
    }
  `]
})

export class ServerComponent{
  serverId = '';
  serverStatus: string = 'offline';


  getColor() {
    return this.serverId ? 'green' : 'red';
  }

} 