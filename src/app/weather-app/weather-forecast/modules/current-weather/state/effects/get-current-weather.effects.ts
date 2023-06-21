import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CurrentWeatherActions } from '../actions/current-weather.actions';
import { of } from 'rxjs';
import { WeatherApiService } from '../../../../../core/modules/weather-api/services/weather-api.service';
import { ICurrentWeather } from '../../interfaces/current-weather.interface';

@Injectable()
export class GetCurrentWeatherEffects {

  getCurrentWeatherData$ = createEffect(() => this.actions$.pipe(
    ofType(CurrentWeatherActions.getWeatherData),
    mergeMap(() => this.weatherApiService.getCurrentWeather().pipe(
      map((currentWeather: ICurrentWeather) => CurrentWeatherActions.weatherLoaded({currentWeather})),
      catchError(() => of({ type: '[weather API] Current Weather Loaded Error' }))
    ))
  ))

  constructor(
    private actions$: Actions,
    private weatherApiService: WeatherApiService
  ) {}

}
