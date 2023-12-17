import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        InputComponent
      ]
    });
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle input value change', () => {
    const onChangeSpy = spyOn(component.onChange, 'emit');

    const input = fixture.debugElement.query(By.css('.input')).nativeElement;
    input.value = 'test';
    input.dispatchEvent(new Event('input'));

    expect(onChangeSpy).toHaveBeenCalledOnceWith('test');
  });
});
