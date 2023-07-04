import { TestBed } from '@angular/core/testing';

import { MockProvider } from "ng-mocks";
import { of } from "rxjs";
import { WeatherApiService } from './weather-api.service';
import { BaseHttpService } from "../../../services/base-http.service";
import { environment } from "../../../../../../environments/environment";

describe('WeatherApiService', () => {
  let service: WeatherApiService;
  let baseHttpService: BaseHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockProvider(BaseHttpService)]
    });
    service = TestBed.inject(WeatherApiService);
    baseHttpService = TestBed.inject(BaseHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get method for getting forecast', (done: DoneFn) => {
    const baseHttpServiceGetMethodSpy = spyOn(baseHttpService, 'get').and.returnValue(of(null));
    const endpoint = 'test';

    service.getWeatherForecast(endpoint).subscribe(() => {
      expect(baseHttpServiceGetMethodSpy).toHaveBeenCalledWith(`${environment.weatherApi.url}${endpoint}`);
      done();
    });
  });
});
