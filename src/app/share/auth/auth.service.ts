import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth=false

  constructor() { }

  onAuth(login:string, password:string){
    let promise=new Promise((resolve,reject) =>{
      if(login==="login" && password==="password"){
        this.isAuth=true
        resolve('Vous etes connectés');

    } else{
      reject('login ou passw errone');}
    }
    )
     return promise;
    
    
  }
  onDismiss(){
    this.isAuth=false;
  }

  getAuthStatut(){
    return this.isAuth;

  }
}
