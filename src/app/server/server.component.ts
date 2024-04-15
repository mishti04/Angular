import { Component } from "@angular/core";

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html",
    styles: [`
.statusSet{color:white}`]
})

export class ServerComponent {
    status = 'no status';
    getColor() {
        if (Math.random() > 0.5) {
            this.status = 'online';
            return 'green';
        }
        else {
            this.status = 'offline';
            return 'red';
        }
    }
}