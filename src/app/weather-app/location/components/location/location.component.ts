import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { LocationActions } from "../../state/actions/location.actions";
import { debounceTime, distinctUntilChanged, Subject } from "rxjs";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  private location$ = new Subject<string>();

  constructor(
    private store: Store
  ) {
  }

  ngOnInit() {
    this.location$.pipe(
      untilDestroyed(this),
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe((location: string) => this.store.dispatch(LocationActions.locationChanged({location})))
  }

  handleLocationChange($event: string) {
    this.location$.next($event);
  }
}
