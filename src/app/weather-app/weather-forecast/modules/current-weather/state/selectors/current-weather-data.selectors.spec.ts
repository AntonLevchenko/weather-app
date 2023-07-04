import { CURRENT_WEATHER_FEATURE_KEY, INITIAL_CURRENT_WEATHER_STATE } from "../constants";
import { selectCurrentWeatherData } from "./current-weather-data.selectors";
import { selectCurrentWeatherForecastState } from "./current-weather-forecast.selectors";

describe('CurrentWeatherDataSelector', () => {
  it("should select the book list", () => {
    const result = selectCurrentWeatherData.projector(INITIAL_CURRENT_WEATHER_STATE);
    expect(result).toEqual(INITIAL_CURRENT_WEATHER_STATE.weatherData);
  });
});
