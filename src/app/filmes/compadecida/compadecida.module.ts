import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompadecidaPageRoutingModule } from './compadecida-routing.module';

import { CompadecidaPage } from './compadecida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompadecidaPageRoutingModule
  ],
  declarations: [CompadecidaPage]
})
export class CompadecidaPageModule {}
