import { createReducer, on } from "@ngrx/store";
import { INITIAL_LOCATION_STATE } from "../constants";
import { LocationActions } from "../actions/location.actions";

export const locationReducer = createReducer(
  INITIAL_LOCATION_STATE,
  on(LocationActions.locationChanged, (state, {location}) => ({...state, name: location}))
)
