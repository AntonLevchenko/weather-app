import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BaseHttpService } from './services/base-http.service';
import { WrapperModule } from './modules/wrapper/wrapper.module';
import { WeatherApiModule } from "./modules/weather-api/weather-api.module";
import { TemperatureUnitsPipe } from './pipes/temperature-units.pipe';
import { FormModule } from "./modules/form/form.module";

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
    WeatherApiModule,
    FormModule
  ],
  exports: [
    WrapperModule,
    TemperatureUnitsPipe,
    FormModule
  ]
})
export class CoreModule { }
