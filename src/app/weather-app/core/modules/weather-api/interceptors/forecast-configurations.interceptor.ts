import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Units } from "../enums/units.enum";

@Injectable()
export class ForecastConfigurationsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      params: request.params.appendAll({
        units: Units.metric
      })
    });
    return next.handle(request);
  }
}
