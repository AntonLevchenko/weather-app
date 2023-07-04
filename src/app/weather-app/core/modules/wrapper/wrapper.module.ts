import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    WrapperComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule
  ],
  exports: [
    WrapperComponent
  ]
})
export class WrapperModule { }
