import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaePageRoutingModule } from './mae-routing.module';

import { MaePage } from './mae.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaePageRoutingModule
  ],
  declarations: [MaePage]
})
export class MaePageModule {}
