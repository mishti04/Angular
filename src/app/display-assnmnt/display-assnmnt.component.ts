import { Component } from '@angular/core';

@Component({
  selector: 'app-display-assnmnt',
  templateUrl: './display-assnmnt.component.html',
  styleUrl: './display-assnmnt.component.css'
})
export class DisplayAssnmntComponent {
display = false;
count = 0;
arr = [];

incrementDisplay(){
this.display=!this.display;
this.arr.push(++this.count);
}

getColor(pwd : string){
  if((this.arr.findIndex(a=> a === pwd))>=5)
    return "blue";
}
}
