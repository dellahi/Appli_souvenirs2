import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultatRecherchePageRoutingModule } from './resultat-recherche-routing.module';

import { ResultatRecherchePage } from './resultat-recherche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultatRecherchePageRoutingModule
  ],
  declarations: [ResultatRecherchePage]
})
export class ResultatRecherchePageModule {}
