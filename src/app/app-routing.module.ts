import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'fil-souvenir', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'resultat-recherche',
    loadChildren: () => import('./resultat-recherche/resultat-recherche.module').then( m => m.ResultatRecherchePageModule)
  },
  {
    path: 'fil-souvenir',
    loadChildren: () => import('./fil-souvenir/fil-souvenir.module').then( m => m.FilSouvenirPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
