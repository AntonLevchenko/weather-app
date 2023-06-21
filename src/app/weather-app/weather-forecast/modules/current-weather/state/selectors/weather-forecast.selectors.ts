import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IWeatherForecastState } from '../interfaces/current-weather.state.interface';
import { CURRENT_WEATHER_FEATURE_KEY } from '../constants';

export const selectWeatherForecastState = createFeatureSelector<IWeatherForecastState>(
  CURRENT_WEATHER_FEATURE_KEY
);
