import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouvenirsPageRoutingModule } from './souvenirs-routing.module';

import { SouvenirsPage } from './souvenirs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouvenirsPageRoutingModule
  ],
  declarations: [SouvenirsPage]
})
export class SouvenirsPageModule {}
