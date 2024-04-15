import { Component } from "@angular/core";

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html"
})

export class ServerComponent {
  
    getColor() {
        if (Math.random() > 0.5)
            return 'green';
        else
            return 'red';
    }
}