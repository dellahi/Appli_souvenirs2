import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilSouvenirPage } from './fil-souvenir.page';

const routes: Routes = [
  {
    path: '',
    component: FilSouvenirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilSouvenirPageRoutingModule {}
