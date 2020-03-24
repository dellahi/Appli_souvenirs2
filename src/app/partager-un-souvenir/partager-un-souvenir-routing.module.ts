import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartagerUnSouvenirPage } from './partager-un-souvenir.page';

const routes: Routes = [
  {
    path: '',
    component: PartagerUnSouvenirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartagerUnSouvenirPageRoutingModule {}
