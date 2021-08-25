import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompadecidaPage } from './compadecida.page';

const routes: Routes = [
  {
    path: '',
    component: CompadecidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompadecidaPageRoutingModule {}
