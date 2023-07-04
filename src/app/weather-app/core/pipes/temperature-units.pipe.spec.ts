import { TemperatureUnitsPipe } from './temperature-units.pipe';
import { Units, UnitsHTMLCodes } from "../enums/units.enum";

describe('TemperatureUnitsPipe', () => {
  it('create an instance', () => {
    const pipe = new TemperatureUnitsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should update temperature with metric units', () => {
    const pipe = new TemperatureUnitsPipe();
    const units = Units.metric;
    const temperature = 10;
    expect(pipe.transform(temperature, units )).toBe(`${temperature}<span>${UnitsHTMLCodes[units]}</span>`);
  });

  it('should update temperature with defaulr units', () => {
    const pipe = new TemperatureUnitsPipe();
    const defaultUnits = Units.metric;
    const temperature = 10;
    expect(pipe.transform(temperature)).toBe(`${temperature}<span>${UnitsHTMLCodes[defaultUnits]}</span>`);
  });
});
