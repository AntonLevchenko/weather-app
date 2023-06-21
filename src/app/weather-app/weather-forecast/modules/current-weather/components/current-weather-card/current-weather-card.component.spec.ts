import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherCardComponent } from './current-weather-card.component';

describe('ForecastCardComponent', () => {
  let component: CurrentWeatherCardComponent;
  let fixture: ComponentFixture<CurrentWeatherCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentWeatherCardComponent]
    });
    fixture = TestBed.createComponent(CurrentWeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
