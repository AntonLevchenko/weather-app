import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './components/location/location.component';
import { CoreModule } from "../core/core.module";

@NgModule({
  declarations: [
    LocationComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    LocationComponent
  ]
})
export class LocationModule { }
