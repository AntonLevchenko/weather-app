import { BackgroundWeatherImageDirective } from './background-weather-image.directive';
import { TestBed } from "@angular/core/testing";
import { CurrentWeatherCardComponent } from "../components/current-weather-card/current-weather-card.component";
import { MockComponents, MockDirectives } from "ng-mocks";
import { CurrentWeatherInfoComponent } from "../components/current-weather-info/current-weather-info.component";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { INITIAL_CURRENT_WEATHER_STATE } from "../state/constants";
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

@Component({
  template: `<div appBackgroundWeatherImage></div>`
})
class TestComponent {
}

describe('BackgroundWeatherImageDirective', () => {
  let fixture;
  let store;
  let des: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        BackgroundWeatherImageDirective,
        TestComponent
      ],
      providers: [
        provideMockStore({ initialState: INITIAL_CURRENT_WEATHER_STATE }),
      ]
    }).createComponent(TestComponent);

    fixture.detectChanges(); // initial binding

    // all elements with an attached HighlightDirective
    des = fixture.debugElement.queryAll(By.directive(BackgroundWeatherImageDirective));
    store = TestBed.inject(MockStore);
  });

  it('should create an instance', () => {
    expect(des).toBeTruthy();
  });
});
