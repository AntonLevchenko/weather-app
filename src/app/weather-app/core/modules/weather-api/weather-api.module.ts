import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherApiService } from './services/weather-api.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppidInterceptor } from './interceptors/appid.interceptor';
import { ForecastConfigurationsInterceptor } from "./interceptors/forecast-configurations.interceptor";

@NgModule({
  declarations: [],
  providers: [
    WeatherApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppidInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ForecastConfigurationsInterceptor,
      multi: true
    }
  ],
  imports: [
    CommonModule
  ]
})
export class WeatherApiModule { }
