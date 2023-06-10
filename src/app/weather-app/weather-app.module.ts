import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from "./core/core.module";
import { LocationModule } from "./location/location.module";
import { WeatherForecastModule } from "./weather-forecast/weather-forecast.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule,
    LocationModule,
    WeatherForecastModule
  ]
})
export class WeatherAppModule { }
