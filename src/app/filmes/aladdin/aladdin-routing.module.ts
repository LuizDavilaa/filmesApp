import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AladdinPage } from './aladdin.page';

const routes: Routes = [
  {
    path: '',
    component: AladdinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AladdinPageRoutingModule {}
