import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo01Component } from './demos/demo01/demo01.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  // http://localhost:4200/home => HomeComponent
  { path: 'home', component: HomeComponent }, 

  // http://localhost:4200/demo01 => Demo01Component
  { path: 'demo01', component: Demo01Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
