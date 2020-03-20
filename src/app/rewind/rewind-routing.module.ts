import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RewindPage } from './rewind.page';

const routes: Routes = [
  {
    path: '',
    component: RewindPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RewindPageRoutingModule {}
