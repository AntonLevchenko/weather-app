import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../../services/base-http.service';
import { Observable } from 'rxjs';
import { ICurrentWeather } from '../../../../weather-forecast/modules/current-weather/interfaces/current-weather.interface';
import { environment } from '../../../../../../environments/environment';

@Injectable({providedIn: 'root'})
export class WeatherApiService {

  private readonly API_URL = environment.weatherApi.url;

  constructor(
    private baseHttpService: BaseHttpService
  ) {
  }

  public getCurrentWeather(): Observable<ICurrentWeather> {
    return this.baseHttpService.get<ICurrentWeather>(`${this.API_URL}weather?q=London,uk&appid=${environment.weatherApi.key}`)
  }

}
