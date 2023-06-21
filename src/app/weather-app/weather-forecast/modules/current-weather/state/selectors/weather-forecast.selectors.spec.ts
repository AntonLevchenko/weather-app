import * as fromWeatherForecast from '../reducers/current-weather.reducer';
import { selectWeatherForecastState } from './weather-forecast.selectors';

describe('WeatherForecast Selectors', () => {
  it('should select the feature state', () => {
    const result = selectWeatherForecastState({
     [fromWeatherForecast.CURRENT_WEATHER_FEATURE_KEY]: {}
    });

    expect(result).toEqual({});
  });
});
