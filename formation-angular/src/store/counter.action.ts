import { createAction } from "@ngrx/store";

export const increment = createAction('[Counter] Incremement');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] reset');