import { Component, OnInit } from '@angular/core';
import{Souvenir} from '../../app/fil-souvenir/souvenirs';

@Component({
  selector: 'app-recherche-profil',
  templateUrl: './recherche-profil.page.html',
  styleUrls: ['./recherche-profil.page.scss'],
})
export class RechercheProfilPage implements OnInit {

  listSouvenir: Souvenir[] =  [{nom:"Parachute", lieu:"Quiberon", date:"25/03/2018", image:"../../assets/example.jpg" }, 
  {nom:"Séjour" , lieu:"Paris" , date:"10/10/2010", image:"../../assets/louvre.jpg"},
  {nom:"Voyage", lieu:"Bretagne", date:"01/12/2018", image:"../../assets/example2.jpg"},
  {nom:"Soirée film", lieu:"Confinement", date:"20/03/2020", image:"../../assets/eragon.jpg" }];
  constructor() { }

  ngOnInit() {
  }

}
