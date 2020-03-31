import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.page.html',
  styleUrls: ['./recherche.page.scss'],
})
export class RecherchePage implements OnInit {

  constructor(private router : Router) {}


  recherche(){
    this.router.navigate(['/recherche-profil']);
  }
  ngOnInit() {
  }

}
