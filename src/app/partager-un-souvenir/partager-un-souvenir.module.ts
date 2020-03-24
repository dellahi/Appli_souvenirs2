import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartagerUnSouvenirPageRoutingModule } from './partager-un-souvenir-routing.module';

import { PartagerUnSouvenirPage } from './partager-un-souvenir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartagerUnSouvenirPageRoutingModule
  ],
  declarations: [PartagerUnSouvenirPage]
})
export class PartagerUnSouvenirPageModule {}
