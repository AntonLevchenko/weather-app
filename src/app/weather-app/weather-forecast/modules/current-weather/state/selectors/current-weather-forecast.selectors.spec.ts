import { selectCurrentWeatherForecastState } from './current-weather-forecast.selectors';
import { CURRENT_WEATHER_FEATURE_KEY, INITIAL_CURRENT_WEATHER_STATE } from "../constants";

describe('CurrentWeatherForecastSelector', () => {
  it("should select the weather forecast", () => {
    const result = selectCurrentWeatherForecastState.projector(INITIAL_CURRENT_WEATHER_STATE);
    expect(result).toEqual(INITIAL_CURRENT_WEATHER_STATE);
  });
});
