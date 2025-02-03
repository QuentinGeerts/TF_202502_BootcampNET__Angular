import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo01Component } from './demos/demo01/demo01.component';
import { Demo02Component } from './demos/demo02/demo02.component';
import { Demo03Component } from './demos/demo03/demo03.component';
import { Demo04Component } from './demos/demo04/demo04.component';
import { Exo01Component } from './exos/exo01/exo01.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  // http://localhost:4200/home => HomeComponent
  { path: 'home', component: HomeComponent }, 

  // http://localhost:4200/demo01 => Demo01Component
  { path: 'demo01', component: Demo01Component },
  { path: 'demo02', component: Demo02Component },
  { path: 'demo03', component: Demo03Component },
  { path: 'demo04', component: Demo04Component },

  { path: 'exo01', component: Exo01Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
