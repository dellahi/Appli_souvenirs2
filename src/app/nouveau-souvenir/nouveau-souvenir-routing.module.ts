import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NouveauSouvenirPage } from './nouveau-souvenir.page';

const routes: Routes = [
  {
    path: '',
    component: NouveauSouvenirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NouveauSouvenirPageRoutingModule {}
