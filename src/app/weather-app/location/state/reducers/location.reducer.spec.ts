import { locationReducer } from './location.reducer';
import { INITIAL_LOCATION_STATE } from '../constants';
import { LocationActions } from '../actions/location.actions';

describe('Location Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = locationReducer(INITIAL_LOCATION_STATE, action);

      expect(result).toBe(INITIAL_LOCATION_STATE);
    });
  });

  describe('an LocationActions.locationChanged action', () => {
    it('should return the state with location', () => {
      const action = LocationActions.locationChanged({ location: 'test' });

      const result = locationReducer(INITIAL_LOCATION_STATE, action);

      expect(result).toEqual({...INITIAL_LOCATION_STATE, name: 'test'});
    });
  });
});
