import { Component, OnInit } from '@angular/core';

@Component({
  // selecting by attribute
  //selector: '[app-servers]',

  //selecting by class
  // selector: '.app-servers',

  //selecting by element
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "no server";
  serverName = "Test server";
  username = "initial value";
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "server created";
    this.serverCreated = true;
  }

  //This is being fired with every keystroke. 
  // onUpdateServerName(event:any){
  //Logging so we can see what all properties does this event has
  //   console.log(event);
  //   this.serverName = event.target.value;
  // }


  /* The same method can be written both ways, th ebelow one is better as it has more strict type specification */
  onUpdateServerName(event: Event) {
    //The console log is just for us. We dont need to log every time a keystroke is hit. This is just to be usd in  the dvelopment phase
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
    //If this was 2 way data binding, setting the server name to something else would have also showed up inside th textbox.
    this.serverName="Abrupt server name changed";
  }

  //because this is a single stament, this could have directly put in the html file too
  //as (click)="username = ''" --> 
  resetTextbox(){
    this.username = '';
  }

}
