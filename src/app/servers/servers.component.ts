import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: '<app-server><app-server><app-server><app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverName = 'Testserver';
  serverCreated =false;

  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'server was created!';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
