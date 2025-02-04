import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { Demo01Component } from './demo01/demo01.component';
import { Demo02Component } from './demo02/demo02.component';
import { Demo03Component } from './demo03/demo03.component';
import { Demo04Component } from './demo04/demo04.component';
import { DemosRoutingModule } from './demos-routing.module';
import { DemosComponent } from './demos.component';
import { Demo05Component } from './demo05/demo05.component';
import { Demo06Component } from './demo06/demo06.component';
import { Demo07Component } from './demo07/demo07.component';


@NgModule({
  declarations: [
    DemosComponent,
    Demo01Component,
    Demo02Component,
    Demo03Component,
    Demo04Component,
    Demo05Component,
    Demo06Component,
    Demo07Component,
  ],
  imports: [
    DemosRoutingModule,
    // CommonModule,
    // FormsModule, // Important pour le two-way binding
    SharedModule,
  ]
})
export class DemosModule { }
