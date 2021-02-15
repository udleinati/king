import { ActionReducer, combineReducers, compose } from '@ngrx/store';
import { Datasource } from '../types/datasource.type';
import * as fromService from './service';

const reducers = {
  service: fromService.reducer
}

// const developmentReducer: ActionReducer<Record<any, Datasource>> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<Record<any, Datasource>> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  // if (environment.production) {
  return productionReducer(state, action);
  // } else {
    // return developmentReducer(state, action);
  // }
}
