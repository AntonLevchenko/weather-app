import { currentWeatherReducer } from './current-weather.reducer';
import { INITIAL_CURRENT_WEATHER_STATE } from "../constants";
import { CurrentWeatherActions } from "../actions/current-weather.actions";
import { WEATHER_DATA_MOCK } from "../../tests/mocks/weather-data.mock";

describe('WeatherForecast Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = currentWeatherReducer(INITIAL_CURRENT_WEATHER_STATE, action);

      expect(result).toBe(INITIAL_CURRENT_WEATHER_STATE);
    });
  });

  describe('an CurrentWeatherActions.weatherLoaded action', () => {
    it('should return the state with weatherData', () => {
      const action = CurrentWeatherActions.weatherLoaded({currentWeather: WEATHER_DATA_MOCK});

      const result = currentWeatherReducer(INITIAL_CURRENT_WEATHER_STATE, action);

      expect(result).toEqual({...INITIAL_CURRENT_WEATHER_STATE, weatherData: {...WEATHER_DATA_MOCK}});
    });
  });
});
