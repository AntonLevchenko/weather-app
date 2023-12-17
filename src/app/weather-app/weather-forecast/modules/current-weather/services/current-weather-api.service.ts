import { Injectable } from '@angular/core';
import { WeatherApiService } from "../../../../core/modules/weather-api/services/weather-api.service";
import { Observable } from "rxjs";
import { ICurrentWeather } from "../interfaces/current-weather.interface";
import { DEFAULT_LOCATION } from "../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherApiService {

  constructor(
    private weatherApiService: WeatherApiService
  ) { }

  public getCurrentWeather(location: string = DEFAULT_LOCATION): Observable<ICurrentWeather> {
    return this.weatherApiService.getWeatherForecast(`weather?q=${location}`)
  }

}
