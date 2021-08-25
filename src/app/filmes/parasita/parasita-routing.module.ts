import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParasitaPage } from './parasita.page';

const routes: Routes = [
  {
    path: '',
    component: ParasitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParasitaPageRoutingModule {}
