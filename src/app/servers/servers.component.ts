import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]', //In attribute selector style way
  //selector: '.app-servers', ////In class selector style way
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = '';
  serverCreated = false;

  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(){

  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
