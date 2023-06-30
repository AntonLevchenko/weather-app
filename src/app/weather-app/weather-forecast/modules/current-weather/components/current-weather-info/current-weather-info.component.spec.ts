import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherInfoComponent } from './current-weather-info.component';

describe('CurrentWeatherInfoComponent', () => {
  let component: CurrentWeatherInfoComponent;
  let fixture: ComponentFixture<CurrentWeatherInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentWeatherInfoComponent]
    });
    fixture = TestBed.createComponent(CurrentWeatherInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
