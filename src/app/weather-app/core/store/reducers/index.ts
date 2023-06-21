import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap, createAction,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';
import { State } from '../interfaces/state.interface';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
