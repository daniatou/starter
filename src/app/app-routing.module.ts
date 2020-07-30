import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppareilsComponent} from './appareils/appareils.component'
import { AuthentificationComponent } from './authentification/authentification.component';
import { AppareilsListComponent } from './appareils-list/appareils-list.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';




const routes: Routes = [
  { path: '', component:AppareilsListComponent},
  { path: 'appareils', component:AppareilsComponent},
  { path: 'single-app/:id', component:SingleAppareilComponent},
  { path: 'auth', component:AuthentificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
