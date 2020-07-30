import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilsComponent } from './appareils/appareils.component';
import {FormsModule} from "@angular/forms";
import { AuthentificationComponent } from './authentification/authentification.component';
import { AppareilsListComponent } from './appareils-list/appareils-list.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component'

@NgModule({
  declarations: [
    AppComponent,
    AppareilsComponent,
    AuthentificationComponent,
    AppareilsListComponent,
    SingleAppareilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
