import { createSelector } from "@ngrx/store";
import { Datasource } from "src/app/shared/types/datasource.type";

/* List */
const routes = (state: Record<string, Datasource>) => state.routes;

export const getRoutesState = createSelector(
  routes,
  (state: Datasource) => state
)

export const getRoutesPayload = createSelector(
  routes,
  (state: Datasource) => state.payload
)

/* Get One */
const route = (state: Record<string, Datasource>) => state.route;

export const getRouteState = createSelector(
  route,
  (state: Datasource) => state
)

export const getRoutePayload = createSelector(
  route,
  (state: Datasource) => state.payload
)
