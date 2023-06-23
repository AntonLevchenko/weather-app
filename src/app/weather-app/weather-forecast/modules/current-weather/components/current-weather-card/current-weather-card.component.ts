import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CurrentWeatherActions } from '../../state/actions/current-weather.actions';
import { selectCurrentWeatherData } from "../../state/selectors/current-weather-data.selectors";

@Component({
  selector: 'app-current-weather-card',
  templateUrl: './current-weather-card.component.html',
  styleUrls: ['./current-weather-card.component.scss']
})
export class CurrentWeatherCardComponent implements OnInit {

  currentWeatherData$ = this.store.select(selectCurrentWeatherData);

  constructor(
    private store: Store<any>
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(CurrentWeatherActions.getWeatherData());
  }

}
