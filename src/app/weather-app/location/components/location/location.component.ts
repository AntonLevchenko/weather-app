import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from "rxjs";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { LocationService } from '../../services/location.service';

@UntilDestroy()
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  private location$ = new Subject<string>();

  constructor(
    private locationService: LocationService
  ) {
  }

  ngOnInit() {
    this.location$.pipe(
      untilDestroyed(this),
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe((location: string) => this.locationService.updateLocation(location));
  }

  handleLocationChange($event: string) {
    this.location$.next($event);
  }
}
