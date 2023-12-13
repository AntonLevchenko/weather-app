import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() placeholder: string;
  @Input() value: string;

  @Output('onChange') onChange = new EventEmitter<string>();

  handleChange(value: string): void {
    this.onChange.emit(value);
  }
}
