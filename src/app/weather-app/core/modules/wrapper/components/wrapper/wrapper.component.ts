import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../../weather-api/services/weather-api.service';
import { ICurrentWeather } from '../../../../../weather-forecast/modules/current-weather/interfaces/current-weather.interface';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  constructor(
    private weatherApiService:WeatherApiService
  ) {
  }

  ngOnInit(): void {
    this.weatherApiService.getCurrentWeather().subscribe((res: ICurrentWeather)=>{
      console.log(res);
    })
  }

}
