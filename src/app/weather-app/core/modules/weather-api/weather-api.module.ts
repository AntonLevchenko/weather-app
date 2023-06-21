import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherApiService } from './services/weather-api.service';
import { WeatherInfoService } from './services/weather-info.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppidInterceptor } from './interceptors/appid.interceptor';

@NgModule({
  declarations: [],
  providers: [
    WeatherApiService,
    WeatherInfoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppidInterceptor,
      multi: true
    }
  ],
  imports: [
    CommonModule
  ]
})
export class WeatherApiModule { }
