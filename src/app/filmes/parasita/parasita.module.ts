import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParasitaPageRoutingModule } from './parasita-routing.module';

import { ParasitaPage } from './parasita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParasitaPageRoutingModule
  ],
  declarations: [ParasitaPage]
})
export class ParasitaPageModule {}
