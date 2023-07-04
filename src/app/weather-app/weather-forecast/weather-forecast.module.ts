import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWeatherModule } from './modules/current-weather/current-weather.module';


@NgModule({
  imports: [
    CommonModule,
    CurrentWeatherModule
  ],
  exports: [
    CurrentWeatherModule
  ]
})
export class WeatherForecastModule { }
