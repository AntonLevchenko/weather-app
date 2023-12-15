import { TestBed } from '@angular/core/testing';

import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { LocationService } from './location.service';
import { INITIAL_LOCATION_STATE } from '../state/constants';

describe('LocationService', () => {
  let service: LocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LocationService,
        provideMockStore({ initialState: INITIAL_LOCATION_STATE }),
      ]
    });
    service = TestBed.inject(LocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should handle change location', () => {
    const storeDispatchSpy = spyOn(service['store'], 'dispatch');
    service.updateLocation('test');
    expect(storeDispatchSpy).toHaveBeenCalledWith({ location: 'test', type: '[Location] Location Changed' } as Action)
  });
});
