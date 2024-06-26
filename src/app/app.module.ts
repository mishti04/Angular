import { BrowserModule } from '@angular/platform-browser';
//NgModule is what is needed to use 2 way data binding
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './successAlert/successAlertComponent';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { DisplayAssnmntComponent } from './display-assnmnt/display-assnmnt.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    DisplayAssnmntComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
