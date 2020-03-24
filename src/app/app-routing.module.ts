import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'nouveau-souvenir', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'resultat-recherche',
    loadChildren: () => import('./resultat-recherche/resultat-recherche.module').then( m => m.ResultatRecherchePageModule)
  },
  {
    path: 'nouveau-souvenir',
    loadChildren: () => import('./nouveau-souvenir/nouveau-souvenir.module').then( m => m.NouveauSouvenirPageModule)
  },
  {
    path: 'partager-un-souvenir',
    loadChildren: () => import('./partager-un-souvenir/partager-un-souvenir.module').then( m => m.PartagerUnSouvenirPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
