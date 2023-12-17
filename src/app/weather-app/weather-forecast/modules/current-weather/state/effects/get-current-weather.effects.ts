import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { CurrentWeatherActions } from '../actions/current-weather.actions';
import { ICurrentWeather } from '../../interfaces/current-weather.interface';
import { CurrentWeatherApiService } from "../../services/current-weather-api.service";
import { Store } from "@ngrx/store";
import { locationFeature } from "../../../../../location/state/location.feature";

@Injectable()
export class GetCurrentWeatherEffects {

  getCurrentWeatherData$ = createEffect(() => this.actions$.pipe(
    ofType(CurrentWeatherActions.getWeatherData),
    withLatestFrom(this.store$),
    map(([action, store]) => locationFeature.selectLocationState(store).name),
    mergeMap((locationName: string) => this.currentWeatherApiService.getCurrentWeather(locationName).pipe(
      map((currentWeather: ICurrentWeather) => CurrentWeatherActions.weatherLoaded({currentWeather})),
    )),
    catchError((err) => {
      this.store$.dispatch(CurrentWeatherActions.currentWeatherLoadedError());
      return throwError(() => err);
    })
  ))

  constructor(
    private actions$: Actions,
    private store$: Store,
    private currentWeatherApiService: CurrentWeatherApiService
  ) {}

}
