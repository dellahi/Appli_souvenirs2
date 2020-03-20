import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'resultat-recherche',
    loadChildren: () => import('./resultat-recherche/resultat-recherche.module').then( m => m.ResultatRecherchePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'souvenirs',
    loadChildren: () => import('./souvenirs/souvenirs.module').then( m => m.SouvenirsPageModule)
  },
  {
    path: 'new-souvenir',
    loadChildren: () => import('./new-souvenir/new-souvenir.module').then( m => m.NewSouvenirPageModule)
  },
  {
    path: 'rewind',
    loadChildren: () => import('./rewind/rewind.module').then( m => m.RewindPageModule)
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
