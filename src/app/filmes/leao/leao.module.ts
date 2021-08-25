import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaoPageRoutingModule } from './leao-routing.module';

import { LeaoPage } from './leao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaoPageRoutingModule
  ],
  declarations: [LeaoPage]
})
export class LeaoPageModule {}
