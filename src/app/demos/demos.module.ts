import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Demo01Component } from './demo01/demo01.component';
import { Demo02Component } from './demo02/demo02.component';
import { Demo03Component } from './demo03/demo03.component';
import { Demo04Component } from './demo04/demo04.component';
import { DemosRoutingModule } from './demos-routing.module';
import { DemosComponent } from './demos.component';


@NgModule({
  declarations: [
    DemosComponent,
    Demo01Component,
    Demo02Component,
    Demo03Component,
    Demo04Component,
  ],
  imports: [
    CommonModule,
    DemosRoutingModule,
    FormsModule, // Important pour le two-way binding
  ]
})
export class DemosModule { }
