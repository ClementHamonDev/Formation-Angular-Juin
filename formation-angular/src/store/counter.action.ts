import { createAction, props } from "@ngrx/store";

export const increment = createAction('[Counter] Incremement');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] reset');
export const incrementBy = createAction('[Counter] increment by number', props<{nombre: number}>())