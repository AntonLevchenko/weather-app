import { Injectable } from '@angular/core';
import { LocationActions } from '../state/actions/location.actions';
import { Store } from '@ngrx/store';

@Injectable()
export class LocationService {

  constructor(
    private store: Store
  ) { }

  public updateLocation(location: string): void {
    this.store.dispatch(LocationActions.locationChanged({location}));
  }
}
