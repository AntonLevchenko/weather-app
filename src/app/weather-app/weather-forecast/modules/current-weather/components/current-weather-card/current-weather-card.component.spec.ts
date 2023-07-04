import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockComponents } from "ng-mocks";
import { Store } from "@ngrx/store";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { CurrentWeatherCardComponent } from './current-weather-card.component';
import { CurrentWeatherInfoComponent } from "../current-weather-info/current-weather-info.component";
import { INITIAL_CURRENT_WEATHER_STATE } from "../../state/constants";
import { CurrentWeatherActions } from "../../state/actions/current-weather.actions";

describe('ForecastCardComponent', () => {
  let component: CurrentWeatherCardComponent;
  let fixture: ComponentFixture<CurrentWeatherCardComponent>;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CurrentWeatherCardComponent,
        MockComponents(CurrentWeatherInfoComponent)
      ],
      providers: [
        provideMockStore({ initialState: INITIAL_CURRENT_WEATHER_STATE }),
      ]
    });
    fixture = TestBed.createComponent(CurrentWeatherCardComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch getWeatherData action', () => {
    const storeDispatchSpy = spyOn(store, 'dispatch');
    const fixture = TestBed.createComponent(CurrentWeatherCardComponent);
    fixture.detectChanges();
    expect(storeDispatchSpy).toHaveBeenCalledWith(CurrentWeatherActions.getWeatherData());
  });
});
