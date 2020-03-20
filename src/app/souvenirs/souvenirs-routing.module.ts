import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouvenirsPage } from './souvenirs.page';

const routes: Routes = [
  {
    path: '',
    component: SouvenirsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouvenirsPageRoutingModule {}
