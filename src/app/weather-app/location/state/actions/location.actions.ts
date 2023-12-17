import { createActionGroup, props } from "@ngrx/store";

export const LocationActions = createActionGroup({
  source: 'Location',
  events: {
    'Location Changed': props<{location: string}>()
  }
})
