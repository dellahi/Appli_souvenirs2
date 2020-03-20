import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewSouvenirPageRoutingModule } from './new-souvenir-routing.module';

import { NewSouvenirPage } from './new-souvenir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewSouvenirPageRoutingModule
  ],
  declarations: [NewSouvenirPage]
})
export class NewSouvenirPageModule {}
