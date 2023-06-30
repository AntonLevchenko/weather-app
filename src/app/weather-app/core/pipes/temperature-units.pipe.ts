import { Pipe, PipeTransform } from '@angular/core';
import { Units, UnitsHTMLCodes } from "../enums/units.enum";

@Pipe({
  name: 'temperatureUnits'
})
export class TemperatureUnitsPipe implements PipeTransform {

  transform(value: number, units: Units): unknown {
    return value.toFixed(2) + `<span>${UnitsHTMLCodes[units]}</span>`;
  }

}
