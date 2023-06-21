import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { ICurrentWeather } from '../../interfaces/current-weather.interface';

export const CurrentWeatherActions = createActionGroup({
  source: 'Current Weather',
  events: {
    'Get Weather Data': emptyProps(),
    'Weather Loaded': props<{ currentWeather: ICurrentWeather }>(),
  },
})
