import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LocationActions } from "../actions/location.actions";
import {
  CurrentWeatherActions
} from "../../../weather-forecast/modules/current-weather/state/actions/current-weather.actions";
import { map } from "rxjs/operators";

@Injectable()
export class UpdatedLocationEffects {
  updatedLocation$ = createEffect(() => this.actions$.pipe(
    ofType(LocationActions.locationChanged),
    map(() => CurrentWeatherActions.getWeatherData())
  ))

  constructor(
    private actions$: Actions
  ) {
  }
}
