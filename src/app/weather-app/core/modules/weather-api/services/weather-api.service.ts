import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../../services/base-http.service';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../environments/environment';

@Injectable({providedIn: 'root'})
export class WeatherApiService {

  private readonly API_URL = environment.weatherApi.url;

  constructor(
    private baseHttpService: BaseHttpService
  ) {
  }

  public getWeatherForecast<T>(endpoint: string): Observable<T> {
    return this.baseHttpService.get<T>(`${this.API_URL}${endpoint}`)
  }

}
