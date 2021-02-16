import { createSelector } from "@ngrx/store";
import { Datasource } from "src/app/shared/types/datasource.type";

/* List */
const services = (state: Record<string, Datasource>) => state.services;

export const getServicesState = createSelector(
  services,
  (state: Datasource) => state
)

export const getServicesPayload = createSelector(
  services,
  (state: Datasource) => state.payload
)

/* Get One */
const service = (state: Record<string, Datasource>) => state.service;

export const getServiceState = createSelector(
  service,
  (state: Datasource) => state
)

export const getServicePayload = createSelector(
  service,
  (state: Datasource) => state.payload
)
