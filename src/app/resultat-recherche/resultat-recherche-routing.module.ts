import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultatRecherchePage } from './resultat-recherche.page';

const routes: Routes = [
  {
    path: '',
    component: ResultatRecherchePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultatRecherchePageRoutingModule {}
