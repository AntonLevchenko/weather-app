import { TestBed } from '@angular/core/testing';

import { ForecastConfigurationsInterceptor } from './forecast-configurations.interceptor';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HTTP_INTERCEPTORS, HttpClient, HttpRequest } from "@angular/common/http";
import { Units } from "../../../enums/units.enum";

describe('ForecastConfigurationsInterceptor', () => {
  let interceptor: ForecastConfigurationsInterceptor;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ForecastConfigurationsInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ForecastConfigurationsInterceptor,
          multi: true
        }
      ]
    });
    interceptor = TestBed.inject(ForecastConfigurationsInterceptor);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should add unit to the query params', (done: DoneFn) => {
    httpClient.get('/test').subscribe(() => done());

    const request = httpTestingController.expectOne((req: HttpRequest<any>) => req.url.includes('/test'));
    expect(request.request.params.get('units')).toBe(Units.metric);
    request.flush({});
  });
});
