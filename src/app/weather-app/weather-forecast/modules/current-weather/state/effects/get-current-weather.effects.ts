import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CurrentWeatherActions } from '../actions/current-weather.actions';
import { ICurrentWeather } from '../../interfaces/current-weather.interface';
import { CurrentWeatherApiService } from "../../services/current-weather-api.service";

@Injectable()
export class GetCurrentWeatherEffects {

  getCurrentWeatherData$ = createEffect(() => this.actions$.pipe(
    ofType(CurrentWeatherActions.getWeatherData),
    mergeMap(() => this.currentWeatherApiService.getCurrentWeather().pipe(
      map((currentWeather: ICurrentWeather) => CurrentWeatherActions.weatherLoaded({currentWeather})),
      catchError(() => of({ type: '[weather API] Current Weather Loaded Error' }))
    ))
  ))

  constructor(
    private actions$: Actions,
    private currentWeatherApiService: CurrentWeatherApiService
  ) {}

}
