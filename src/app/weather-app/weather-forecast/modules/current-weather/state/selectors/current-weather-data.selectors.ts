import { createSelector } from '@ngrx/store';
import { selectCurrentWeatherForecastState } from "./current-weather-forecast.selectors";
import { ICurrentWeatherState } from "../interfaces/current-weather.state.interface";

export const selectCurrentWeatherData = createSelector(
  selectCurrentWeatherForecastState,
  (state: ICurrentWeatherState) => state.weatherData
);
