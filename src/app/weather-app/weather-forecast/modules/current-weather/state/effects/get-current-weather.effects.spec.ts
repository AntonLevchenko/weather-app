import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, ReplaySubject } from 'rxjs';

import { GetCurrentWeatherEffects } from './get-current-weather.effects';
import { MockProvider } from "ng-mocks";
import { CurrentWeatherApiService } from "../../services/current-weather-api.service";
import { CurrentWeatherActions } from "../actions/current-weather.actions";
import { WEATHER_DATA_MOCK } from "../../tests/mocks/weather-data.mock";

describe('GetCurrentWeatherEffects', () => {
  let actions$: Observable<any>;
  let effects: GetCurrentWeatherEffects;
  let currentWeatherApiService: CurrentWeatherApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GetCurrentWeatherEffects,
        provideMockActions(() => actions$),
        MockProvider(CurrentWeatherApiService)
      ]
    });

    effects = TestBed.inject(GetCurrentWeatherEffects);
    currentWeatherApiService = TestBed.inject(CurrentWeatherApiService);
  });

  it('should get current weather data and emit weatherLoaded action', (done: DoneFn) => {
    const spy = spyOn(currentWeatherApiService, 'getCurrentWeather').and.returnValue(of(WEATHER_DATA_MOCK));
    actions$ = of(CurrentWeatherActions.getWeatherData);
    effects.getCurrentWeatherData$.subscribe((res) => {
      expect(res).toEqual(CurrentWeatherActions.weatherLoaded({ currentWeather: WEATHER_DATA_MOCK }));
      expect(spy).toHaveBeenCalledTimes(1);
      done();
    });
  });

  it('should catch an error', (done: DoneFn) => {
    const spy = spyOn(currentWeatherApiService, 'getCurrentWeather').and.throwError('test');
    actions$ = of(CurrentWeatherActions.getWeatherData);
    effects.getCurrentWeatherData$.subscribe((res: any) => {
    }, (err) => {
      expect(err).toEqual(new Error('test'));
      done();
    });
  });
});
