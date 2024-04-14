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

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = "server created";
  }
}
