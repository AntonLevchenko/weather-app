import { TestBed } from '@angular/core/testing';

import { CurrentWeatherApiService } from './current-weather-api.service';

describe('CurrentWeatherApiService', () => {
  let service: CurrentWeatherApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentWeatherApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
