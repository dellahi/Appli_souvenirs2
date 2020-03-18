import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilSouvenirPageRoutingModule } from './fil-souvenir-routing.module';

import { FilSouvenirPage } from './fil-souvenir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilSouvenirPageRoutingModule
  ],
  declarations: [FilSouvenirPage]
})
export class FilSouvenirPageModule {}
