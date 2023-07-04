import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherInfoComponent } from './current-weather-info.component';
import { WEATHER_DATA_MOCK } from "../../tests/mocks/weather-data.mock";
import { MockPipe } from "ng-mocks";
import { TemperatureUnitsPipe } from "../../../../../core/pipes/temperature-units.pipe";

describe('CurrentWeatherInfoComponent', () => {
  let component: CurrentWeatherInfoComponent;
  let fixture: ComponentFixture<CurrentWeatherInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CurrentWeatherInfoComponent,
        MockPipe(TemperatureUnitsPipe, value => `${value}`)
      ]
    });
    fixture = TestBed.createComponent(CurrentWeatherInfoComponent);
    component = fixture.componentInstance;
    component.weatherData = WEATHER_DATA_MOCK;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display location', () => {
    const locationEl: HTMLElement = fixture.nativeElement.querySelector('.location');
    expect(locationEl.textContent).toBe(`${WEATHER_DATA_MOCK.name}, ${WEATHER_DATA_MOCK.sys.country}`);
  });

  it('should display current temperature', () => {
    const currentTemperatureEl: HTMLElement = fixture.nativeElement.querySelector('.current-temperature');
    expect(currentTemperatureEl.textContent).toContain(WEATHER_DATA_MOCK.main.temp);
  });

  it('should display feels like temperature', () => {
    const locationEl: HTMLElement = fixture.nativeElement.querySelector('.feels-like-temperature');
    expect(locationEl.textContent).toContain(WEATHER_DATA_MOCK.main.feels_like);
  });

  it('should display weather state', () => {
    const locationEl: HTMLElement = fixture.nativeElement.querySelector('.weather-state');
    expect(locationEl.textContent?.toLowerCase()).toContain(WEATHER_DATA_MOCK.weather[0].description);
  });
});
