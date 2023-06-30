import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICurrentWeather } from "../../interfaces/current-weather.interface";
import { Units } from "../../../../../core/enums/units.enum";

@Component({
  selector: 'app-current-weather-info',
  templateUrl: './current-weather-info.component.html',
  styleUrls: ['./current-weather-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentWeatherInfoComponent {

  units = Units.standard;

  @Input() weatherData: ICurrentWeather;

}
