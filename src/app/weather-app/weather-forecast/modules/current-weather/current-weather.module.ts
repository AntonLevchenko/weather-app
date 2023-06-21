import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { CURRENT_WEATHER_FEATURE_KEY } from './state/constants';
import { currentWeatherReducer } from './state/reducers/current-weather.reducer';
import { CurrentWeatherCardComponent } from './components/current-weather-card/current-weather-card.component';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { GetCurrentWeatherEffects } from './state/effects/get-current-weather.effects';

@NgModule({
  declarations: [
    CurrentWeatherCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    StoreModule.forFeature(CURRENT_WEATHER_FEATURE_KEY, currentWeatherReducer),
    EffectsModule.forFeature([GetCurrentWeatherEffects])
  ],
  exports: [
    CurrentWeatherCardComponent
  ]
})
export class CurrentWeatherModule  { }
