import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from "@angular/common/http/testing";

import { BaseHttpService } from './base-http.service';
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Units } from "../enums/units.enum";

describe('BaseHttpService', () => {
  let service: BaseHttpService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BaseHttpService]
    });

    service = TestBed.inject(BaseHttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should do get request by url', (done: DoneFn) => {
    const url = '/test';
    service.get(url).subscribe((res) => {
      expect(res).toEqual({});
      done();
    });

    const request: TestRequest = httpTestingController.expectOne(url);
    request.flush({});
  });

  it('should do post request by url', (done: DoneFn) => {
    const url = '/test';
    service.post(url, {}).subscribe((res) => {
      done();
    });

    const request: TestRequest = httpTestingController.expectOne(url);
    request.flush({});

    expect(request.request.body).toEqual({});
  });
});
