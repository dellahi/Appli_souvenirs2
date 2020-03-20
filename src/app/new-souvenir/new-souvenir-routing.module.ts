import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewSouvenirPage } from './new-souvenir.page';

const routes: Routes = [
  {
    path: '',
    component: NewSouvenirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewSouvenirPageRoutingModule {}
