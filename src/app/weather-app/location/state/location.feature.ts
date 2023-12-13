import { createFeature } from "@ngrx/store";
import { LOCATION_FEATURE_KEY } from "./constants";
import { locationReducer } from "./reducers/location.reducer";

export const locationFeature = createFeature({
  name: LOCATION_FEATURE_KEY,
  reducer: locationReducer
});
