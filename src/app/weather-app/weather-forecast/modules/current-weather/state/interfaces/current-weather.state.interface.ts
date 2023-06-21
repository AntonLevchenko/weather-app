import { ICurrentWeather } from '../../interfaces/current-weather.interface';

export interface ICurrentWeatherState {
  weatherData: ICurrentWeather | null;
}
