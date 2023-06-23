import { TestBed } from '@angular/core/testing';

import { ForecastConfigurationsInterceptor } from './forecast-configurations.interceptor';

describe('ForecastConfigurationsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ForecastConfigurationsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ForecastConfigurationsInterceptor = TestBed.inject(ForecastConfigurationsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
