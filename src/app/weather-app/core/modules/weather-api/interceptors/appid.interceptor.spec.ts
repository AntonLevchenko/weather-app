import { TestBed } from '@angular/core/testing';

import { AppidInterceptor } from './appid.interceptor';
import { HTTP_INTERCEPTORS, HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { environment } from "../../../../../../environments/environment";
import { ForecastConfigurationsInterceptor } from "./forecast-configurations.interceptor";

describe('AppidInterceptor', () => {
  let interceptor: AppidInterceptor;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AppidInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AppidInterceptor,
          multi: true
        }
      ]
    });

    interceptor = TestBed.inject(AppidInterceptor);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should add appId', (done: DoneFn) => {
    httpClient.get('/test').subscribe(() => done());

    const request = httpTestingController.expectOne((req) => req.url.includes('/test'));
    expect(request.request.params.get('appid')).toBe(environment.weatherApi.key);
    request.flush({});
  });
});
