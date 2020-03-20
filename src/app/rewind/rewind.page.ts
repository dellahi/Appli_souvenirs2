import { Component, OnInit } from '@angular/core';
import{Souvenir} from '../../app/fil-souvenir/souvenirs';

@Component({
  selector: 'app-rewind',
  templateUrl: './rewind.page.html',
  styleUrls: ['./rewind.page.scss'],
})
export class RewindPage implements OnInit {
  listSouvenirs: Souvenir[] = [{nom:"Moi", lieu:"Presqu'ile de Quiberon", date:"02/09/2016", image:"assets/example2.jpg" }, 
  {nom:"Ellana" , lieu:"Maison" , date:"17/09/2015", image:"assets/livre.jpg"},
  {nom:"Moi", lieu:"Port blanc Quiberon", date:"28/07/2018", image:"assets/example.JPG"},
  {nom:"Framboisine", lieu:"J'aime les framboises, c'est quand même vachement bon", date:"17/02/2015", image:"assets/example3.jpg" }];
  constructor() { }
  ngOnInit() {
  }

}


