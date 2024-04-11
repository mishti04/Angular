import { Component, OnInit } from '@angular/core';

@Component({
  // selecting by attribute
  //selector: '[app-servers]',
   
  //selecting by class
  // selector: '.app-servers',

  //selecting by element
   selector: 'app-servers',
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
