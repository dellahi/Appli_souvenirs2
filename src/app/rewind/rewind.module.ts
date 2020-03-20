import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RewindPageRoutingModule } from './rewind-routing.module';

import { RewindPage } from './rewind.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RewindPageRoutingModule
  ],
  declarations: [RewindPage]
})
export class RewindPageModule {}
