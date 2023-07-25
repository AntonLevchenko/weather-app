import { createSelector } from '@ngrx/store';
import { selectCurrentWeatherForecastState } from "./current-weather-forecast.selectors";
import { ICurrentWeatherState } from "../interfaces/current-weather.state.interface";
import { WeatherConditionImageNames } from "../../enums/weather-condition-image-names.enum";
import { WeatherConditionCodes } from "../../enums/weather-condition-codes.enum";

export const currentWeatherBgImageSelector = createSelector(
  selectCurrentWeatherForecastState,
  (state: ICurrentWeatherState): string => {
    const weatherId = state.weatherData?.weather[0]?.icon;
    const test = WeatherConditionCodes['10n'];
    const weatherType = WeatherConditionCodes[weatherId as keyof typeof WeatherConditionCodes];
    return WeatherConditionImageNames[weatherType as keyof typeof WeatherConditionImageNames];
    // const weatherImageCode = Object.values(WeatherConditionCodes).find((code: string) => +(code.trim()) < weatherId) ?? WeatherConditionCodes['200'];
    // return WeatherConditionImageNames[weatherImageCode];
  }
)
