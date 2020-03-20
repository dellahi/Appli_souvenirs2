import { Component, OnInit } from '@angular/core';
import { Souvenir } from './souvenir';

@Component({
  selector: 'app-mon-profil',
  templateUrl: './mon-profil.page.html',
  styleUrls: ['./mon-profil.page.scss'],
})
export class MonProfilPage implements OnInit {

  listSouvenir: Souvenir[] =  [{nom:"Mon souvenir 1", lieu:"Le mans", date:"25/03/2018", image:"../../assets/profile.jfif" }, 
  {nom:"Souveniir" , lieu:"Paris" , date:"10/10/2010", image:"../../assets/profile.jfif"},
  {nom:"Voyage", lieu:"Nantes", date:"01/12/2018", image:"../../assets/profile.jfif"},
  {nom:"Couscous", lieu:"Confinement", date:"20/03/2020", image:"../../assets/profile.jfif" }];
  constructor() { }

  ngOnInit() {
  }

}
