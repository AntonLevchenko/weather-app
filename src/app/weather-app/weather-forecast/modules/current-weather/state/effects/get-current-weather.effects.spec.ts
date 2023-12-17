import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { GetCurrentWeatherEffects } from './get-current-weather.effects';
import { MockProvider } from "ng-mocks";
import { CurrentWeatherApiService } from "../../services/current-weather-api.service";
import { CurrentWeatherActions } from "../actions/current-weather.actions";
import { WEATHER_DATA_MOCK } from "../../tests/mocks/weather-data.mock";
import { provideMockStore } from '@ngrx/store/testing';
import { INITIAL_LOCATION_STATE } from '../../../../../location/state/constants';
import { INITIAL_CURRENT_WEATHER_STATE } from '../constants';
import { locationFeature } from '../../../../../location/state/location.feature';
import { Store } from '@ngrx/store';

describe('GetCurrentWeatherEffects', () => {
  let actions$: Observable<any>;
  let effects: GetCurrentWeatherEffects;
  let store: Store;
  let currentWeatherApiService: CurrentWeatherApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GetCurrentWeatherEffects,
        provideMockActions(() => actions$),
        MockProvider(CurrentWeatherApiService),
        provideMockStore({
          initialState: {...INITIAL_LOCATION_STATE, ...INITIAL_CURRENT_WEATHER_STATE}
        }),
      ]
    });

    effects = TestBed.inject(GetCurrentWeatherEffects);
    store = TestBed.inject(Store);
    currentWeatherApiService = TestBed.inject(CurrentWeatherApiService);

    // mock feature selector
    spyOn(locationFeature, 'selectLocationState').and.returnValue(() => ({ name: 'test' }));
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
    spyOn(currentWeatherApiService, 'getCurrentWeather').and.throwError('test');
    const dispatchSpy = spyOn(store, 'dispatch');

    effects.getCurrentWeatherData$.subscribe(
      () => {},
      (err) => {
        expect(dispatchSpy).toHaveBeenCalledWith(CurrentWeatherActions.currentWeatherLoadedError());
        expect(err).toEqual(new Error('test'));
        done();
      });
  });
});
