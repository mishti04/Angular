import { Component } from "@angular/core";

@Component({
    selector: '.success-Alert',
    template: `<div class =".success-Alert"> SuccessAlert</div>
    <div class =".success-Alert"> WarningAlert</div>`,
    styles:`div {
        color: darkblue;
      }
      `
})

export class SuccessAlertComponent{}