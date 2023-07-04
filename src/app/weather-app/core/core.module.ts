import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BaseHttpService } from './services/base-http.service';
import { WrapperModule } from './modules/wrapper/wrapper.module';
import { WeatherApiModule } from "./modules/weather-api/weather-api.module";
import { TemperatureUnitsPipe } from './pipes/temperature-units.pipe';

@NgModule({
  declarations: [
    TemperatureUnitsPipe
  ],
  providers: [
    BaseHttpService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    WrapperModule,
    WeatherApiModule
  ],
  exports: [
    WrapperModule,
    TemperatureUnitsPipe
  ]
})
export class CoreModule { }
