import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appareil, AppareilService } from '../share/appareils/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
  appareilId:number;
  appareil:Appareil;

  constructor(private routeActive: ActivatedRoute, private appareilService: AppareilService) {
    this.appareil={
      id:0,
      name:"",
      isActif:"Eteint",
    }
   }

  ngOnInit(): void {
    this.appareilId=parseInt(this.routeActive.snapshot.paramMap.get('id'));
    this.appareil=this.appareilService.getAppareilById(this.appareilId);
  }

}
