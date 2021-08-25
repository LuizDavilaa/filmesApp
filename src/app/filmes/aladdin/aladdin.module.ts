import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AladdinPageRoutingModule } from './aladdin-routing.module';

import { AladdinPage } from './aladdin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AladdinPageRoutingModule
  ],
  declarations: [AladdinPage]
})
export class AladdinPageModule {}
