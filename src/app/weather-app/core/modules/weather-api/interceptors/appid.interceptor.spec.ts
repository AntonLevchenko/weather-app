import { TestBed } from '@angular/core/testing';

import { AppidInterceptor } from './appid.interceptor';

describe('AppiKeyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AppidInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AppidInterceptor = TestBed.inject(AppidInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
