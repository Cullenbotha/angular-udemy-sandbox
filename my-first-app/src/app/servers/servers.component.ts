import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', // attribute selector
  //selector: '.app-servers', // css selector, not id though
  //template: '<app-server></app-server>', // can also be written inline
  selector: 'app-servers', // best practice but depends on use care
  templateUrl: './servers.component.html',
  styles: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!"
  serverName = "Test server";
  serverCreated = false;
  servers = ["Test server", "Test server 2"];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2500);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event) {
    this.serverName = event.target.value;
  }
}
