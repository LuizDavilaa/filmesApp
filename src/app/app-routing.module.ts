import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'parasita',
    loadChildren: () => import('./filmes/parasita/parasita.module').then( m => m.ParasitaPageModule)
  },
  {
    path: 'compadecida',
    loadChildren: () => import('./filmes/compadecida/compadecida.module').then( m => m.CompadecidaPageModule)
  },
  {
    path: 'mae',
    loadChildren: () => import('./filmes/mae/mae.module').then( m => m.MaePageModule)
  },
  {
    path: 'aladdin',
    loadChildren: () => import('./filmes/aladdin/aladdin.module').then( m => m.AladdinPageModule)
  },
  {
    path: 'leao',
    loadChildren: () => import('./filmes/leao/leao.module').then( m => m.LeaoPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
