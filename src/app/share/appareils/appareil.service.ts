import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rejects } from 'assert';

export interface Appareil{
  id: number,
  name: string,
  isActif:string,
}

@Injectable({
  providedIn: 'root'
})
export class AppareilService {
  appareils:Appareil[];
  appareilUrl="https://angular-starter-5fa50.firebaseio.com/appareils.json";


  

  constructor(private http: HttpClient) { 
    this.appareils=[
      {
        id: 1,
        name:"Television",
        isActif:"Eteint"
  
      },
      {
        id: 2,
        name:"Machine à laver",
        isActif:"Eteint"
  
      },
  
      {
        id: 3,
        name:"Radio",
        isActif:"Eteint"
  
      },
    ];
  }

  onSaveDateToFireBase(){
    this.http.post(this.appareilUrl,this.appareils).subscribe((resp)=>
    {
      console.log(resp);

    })
  }

  AddAppareilToFireBase(appareil: Appareil){
    this.appareils.push(appareil)
     return this.http.put(this.appareilUrl,this.appareils)
   

  }


  getAllAppareils(){
    return this.http.get(this.appareilUrl);
  }

  addAppareil(appareil:Appareil){
    let promise= new Promise((resolve, reject)=>{
      this.appareils.push(appareil);
      resolve('Appareil ajouté')

    })
    return promise;
  }

  deleteAppareil(id:number){
    let promise= new Promise((resolve, reject)=>{
      this.appareils.splice(id-1, 1);
      resolve('Appareil supprimé')
    
    })
    return promise;
  }

  getAppareilById(id:number){
    for(let i=0; i<this.appareils.length; i++){
      if(this.appareils[i].id===id){
        return this.appareils[i];
      }
    }   
  }
}
