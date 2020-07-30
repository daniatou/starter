import { Component, OnInit } from '@angular/core';
import { Appareil, AppareilService } from '../share/appareils/appareil.service';
import { Router } from '@angular/router';
import { AuthService } from '../share/auth/auth.service';

@Component({
  selector: 'app-appareils-list',
  templateUrl: './appareils-list.component.html',
  styleUrls: ['./appareils-list.component.scss']
})
export class AppareilsListComponent implements OnInit {
  appname:string;

  appareils: Appareil[];
  app :Appareil;



  constructor(private appService:AppareilService, private auth:AuthService,
    private router: Router,)
    {
      this.appname="";
      this.appareils=[];

    }






  ngOnInit(): void {
    this.appService.getAllAppareils().subscribe((resp=>{
      let i=0;
      do{
        this.appareils.push(resp[i]);
        i++;
      } while (resp[i]);
    }))

    this.app={
      id:this.appareils.length+1,
      name:'',
      isActif:"False",
    }
  }
  addAppareil(){

    if(this.auth.getAuthStatut()){
      this.appService.AddAppareilToFireBase(this.app).subscribe((resp)=>{
        console.log(resp['name']);
      })

    }else{
      this.router.navigateByUrl('auth');
    } 

  }


}
