import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaePage } from './mae.page';

const routes: Routes = [
  {
    path: '',
    component: MaePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaePageRoutingModule {}
