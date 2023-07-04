import { createFeatureSelector } from '@ngrx/store';
import { ICurrentWeatherState } from '../interfaces/current-weather.state.interface';
import { CURRENT_WEATHER_FEATURE_KEY } from '../constants';

export const selectCurrentWeatherForecastState = createFeatureSelector<ICurrentWeatherState>(
  CURRENT_WEATHER_FEATURE_KEY
);
