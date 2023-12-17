import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { CurrentWeatherCardComponent } from './components/current-weather-card/current-weather-card.component';
import { EffectsModule } from '@ngrx/effects';
import { GetCurrentWeatherEffects } from './state/effects/get-current-weather.effects';
import { CurrentWeatherInfoComponent } from './components/current-weather-info/current-weather-info.component';
import { CoreModule } from "../../../core/core.module";
import { BackgroundWeatherImageDirective } from './directives/background-weather-image.directive';
import { currentWeatherFeature } from './state/current-weather.feature';

@NgModule({
  declarations: [
    CurrentWeatherCardComponent,
    CurrentWeatherInfoComponent,
    CurrentWeatherInfoComponent,
    BackgroundWeatherImageDirective
  ],
  imports: [
    CommonModule,
    CoreModule,
    StoreModule.forFeature(currentWeatherFeature.name, currentWeatherFeature.reducer),
    EffectsModule.forFeature([GetCurrentWeatherEffects])
  ],
  exports: [
    CurrentWeatherCardComponent
  ]
})
export class CurrentWeatherModule  { }
