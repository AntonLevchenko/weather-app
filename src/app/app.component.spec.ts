import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MockComponents } from "ng-mocks";
import { WrapperComponent } from "./weather-app/core/modules/wrapper/components/wrapper/wrapper.component";
import {
  CurrentWeatherCardComponent
} from "./weather-app/weather-forecast/modules/current-weather/components/current-weather-card/current-weather-card.component";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [
      AppComponent,
      MockComponents(WrapperComponent, CurrentWeatherCardComponent)
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'weather-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('weather-app');
  });
});
