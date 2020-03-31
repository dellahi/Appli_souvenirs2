import { Component, OnInit } from '@angular/core';
import{Souvenir} from '../../app/fil-souvenir/souvenirs';

@Component({
  selector: 'app-fil-souvenir',
  templateUrl: './fil-souvenir.page.html',
  styleUrls: ['./fil-souvenir.page.scss'],
})
export class FilSouvenirPage implements OnInit {

  listSouvenirs: Souvenir[] = [{nom:"Moi", lieu:"Jura - Musée de la pipe", date:"02/03/2020", image:"../assets/pipe.jpg" }, 
                                {nom:"Ellana" , lieu:"Maison - Les misérables" , date:"26/02/2020", image:"../assets/livre.jpg"},
                                {nom:"Moi", lieu:"Vélodrome - Concert JUL", date:"28/01/2020", image:"../assets/jul.jpg"}];

  constructor() { }

  ngOnInit() {
  }

}