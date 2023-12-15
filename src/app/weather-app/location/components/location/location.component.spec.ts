import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { LocationComponent } from './location.component';
import { InputComponent } from '../../../core/modules/form/components/input/input.component';
import { MockComponent, MockProvider } from 'ng-mocks';
import { LocationService } from '../../services/location.service';
import { By } from '@angular/platform-browser';

describe('LocationComponent', () => {
  let component: LocationComponent;
  let inputComponent: InputComponent;
  let locationService: LocationService;
  let fixture: ComponentFixture<LocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LocationComponent,
        MockComponent(InputComponent),
      ],
      providers: [
        MockProvider(LocationService)
      ]
    });
    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;
    inputComponent = fixture.debugElement.query(By.directive(InputComponent)).componentInstance;
    locationService = TestBed.inject(LocationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle input change event', fakeAsync(() => {
    const updateLocationSpy = spyOn(locationService, 'updateLocation');

    inputComponent.onChange.emit('test');
    // debounce time
    tick(500);

    expect(updateLocationSpy).toHaveBeenCalledWith('test');
  }));
});
