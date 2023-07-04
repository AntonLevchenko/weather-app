import { createReducer, on } from '@ngrx/store';
import { INITIAL_CURRENT_WEATHER_STATE } from '../constants';
import { CurrentWeatherActions } from '../actions/current-weather.actions';

export const currentWeatherReducer = createReducer(
  INITIAL_CURRENT_WEATHER_STATE,
  on(CurrentWeatherActions.weatherLoaded, (state, {currentWeather}) => ({...state, weatherData: {...currentWeather}}))
)
