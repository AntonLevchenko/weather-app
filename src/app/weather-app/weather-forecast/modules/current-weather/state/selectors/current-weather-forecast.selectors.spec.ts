import * as fromWeatherForecast from '../reducers/current-weather.reducer';
import { selectCurrentWeatherForecastState } from './current-weather-forecast.selectors';

describe('WeatherForecast Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCurrentWeatherForecastState({
     [fromWeatherForecast.CURRENT_WEATHER_FEATURE_KEY]: {}
    });

    expect(result).toEqual({});
  });
});
