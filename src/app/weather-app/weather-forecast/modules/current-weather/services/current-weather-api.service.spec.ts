import { TestBed } from '@angular/core/testing';

import { MockProvider } from "ng-mocks";
import { CurrentWeatherApiService } from './current-weather-api.service';
import { WeatherApiService } from "../../../../core/modules/weather-api/services/weather-api.service";
import { of } from "rxjs";
import { WEATHER_DATA_MOCK } from "../tests/mocks/weather-data.mock";
import { ICurrentWeather } from "../interfaces/current-weather.interface";

describe('CurrentWeatherApiService', () => {
  let service: CurrentWeatherApiService;
  let weatherApiService: WeatherApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockProvider(WeatherApiService)]
    });
    service = TestBed.inject(CurrentWeatherApiService);
    weatherApiService = TestBed.inject(WeatherApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get weather forecast', () => {
    spyOn(weatherApiService, 'getWeatherForecast').and.returnValue(of(WEATHER_DATA_MOCK))

    service.getCurrentWeather().subscribe((data: ICurrentWeather) => {
      expect(data).toEqual(WEATHER_DATA_MOCK);
    })
  });
});
