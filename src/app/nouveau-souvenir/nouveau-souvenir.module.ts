import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouveauSouvenirPageRoutingModule } from './nouveau-souvenir-routing.module';

import { NouveauSouvenirPage } from './nouveau-souvenir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NouveauSouvenirPageRoutingModule
  ],
  declarations: [NouveauSouvenirPage]
})
export class NouveauSouvenirPageModule {}
