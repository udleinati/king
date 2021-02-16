import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store';
import { Datasource } from '../shared/types/datasource.type';
import * as fromService from './service';

export const reducers = {
  service: fromService.service,
  services: fromService.services
}

export const effects = [
  fromService.Effects
]
