import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './components/location/location.component';
import { CoreModule } from "../core/core.module";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { UpdatedLocationEffects } from "./state/effects/updated-location.effects";
import { locationFeature } from "./state/location.feature";
import { LocationService } from './services/location.service';

@NgModule({
  declarations: [
    LocationComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    StoreModule.forFeature(locationFeature.name, locationFeature.reducer),
    EffectsModule.forFeature([UpdatedLocationEffects])
  ],
  providers: [
    LocationService
  ],
  exports: [
    LocationComponent
  ]
})
export class LocationModule { }
