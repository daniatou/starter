import { Component, OnInit } from '@angular/core';
import {AuthService} from '../share/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  login:string;
  password:string;

  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  connexion(){
    this.auth.onAuth(this.login, this.password).then(()=>{
      this.router.navigateByUrl('');

    }).catch((err)=>{
      alert(err);

    })
  }

}
