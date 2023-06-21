import { createFeature } from '@ngrx/store';
import { CURRENT_WEATHER_FEATURE_KEY } from './constants';
import { currentWeatherReducer } from './reducers/current-weather.reducer';

export const currentWeatherFeature = createFeature({
  name: CURRENT_WEATHER_FEATURE_KEY,
  reducer: currentWeatherReducer
})
