import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskPipe } from './pipes/mask.pipe';
import { ChronoPipe } from './pipes/chrono.pipe';



@NgModule({
  declarations: [
    MaskPipe,
    ChronoPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaskPipe,
    ChronoPipe,
  ]
})
export class SharedModule { }
