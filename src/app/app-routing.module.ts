import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemosComponent } from './demos/demos.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { Exo01Component } from './exos/exo01/exo01.component';
import { ExosComponent } from './exos/exos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  // http://localhost:4200/home => HomeComponent
  { path: 'home', component: HomeComponent },

  // Redirection vers la page home
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Avec lazy-loading: Chargement à la demande
  {
    path: 'demos',
    component: DemosComponent,
    loadChildren: () => import('./demos/demos.module').then(m => m.DemosModule)
  },

  // Sans lazy-loading: charge directement à l'ouverture de l'application
  {
    path: 'exos', component: ExosComponent, children: [
      // http://localhost:4200/exos/exo01 => Exo01Component
      { path: 'exo01', component: Exo01Component },
    ]
  },

  // Redirection dans le cas où aucune route ne correspond
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
