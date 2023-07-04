import { Pipe, PipeTransform } from '@angular/core';
import { Units, UnitsHTMLCodes } from "../enums/units.enum";

@Pipe({
  name: 'temperatureUnits'
})
export class TemperatureUnitsPipe implements PipeTransform {

  transform(value: number, units: Units = Units.metric): string {
    return value.toFixed(0) + `<span>${UnitsHTMLCodes[units]}</span>`;
  }

}
