import { Component, OnInit, Input } from '@angular/core';
import {AuthService} from '../share/auth/auth.service';
import { Router } from '@angular/router';
import { AppareilService } from '../share/appareils/appareil.service';

@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.component.html',
  styleUrls: ['./appareils.component.scss']
})
export class AppareilsComponent implements OnInit {

  title= "GESTION DES APPAREILS";
  @Input() appareilId:number;
  @Input() appareilName:string;
  @Input() isActif:string= 'Eteint';

  

  
  isAuth:boolean=false;
  constructor(private auth:AuthService, private router: Router, private appService: AppareilService) { }

  onAllumer(){
    if(this.isAuth){
      this.isActif='Allumer';
    }else{
      this.router.navigateByUrl('auth');

    }
    this.isActif='Allumer';
    

    
  }

  onEteindre(){
    if(this.isAuth){
      this.isActif='Eteint';
    }else{
      this.router.navigateByUrl('auth');

    }
    this.isActif='Eteint';
    

    
  }
  deleteAppareil(){
    if(this.auth.getAuthStatut()){
      this.appService.deleteAppareil(this.appareilId).then((message=>{
        alert(message);
      }))

    }else{
      this.router.navigateByUrl('auth');
    }
    
  }

  onNavigateToSingleApp(){
    this.router.navigateByUrl('single-app/'+this.appareilId);
  }

  ngOnInit(): void {
    this.isAuth= this.auth.getAuthStatut();
  }

}
