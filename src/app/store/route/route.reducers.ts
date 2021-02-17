import { Datasource } from 'src/app/shared/types/datasource.type';
import { Actions, ADD, UPDATE, ADD_SUCCESS, GET, GET_SUCCESS, LIST, LIST_SUCCESS, UPDATE_SUCCESS, REMOVE, REMOVE_SUCCESS } from './route.actions';

export const initialState: Datasource = new Datasource();

export const routes = (
  state = initialState,
  action: Actions
): Datasource => {
  switch (action.type) {
    case LIST:
      return { ...state, ...{ isLoading: true, loaded: false } };
    case LIST_SUCCESS:
      return { ...state, ...{ isLoading: false, loaded: true, payload: action.payload }}
    default:
      return state;
  }
}

export const route = (
  state = initialState,
  action: Actions
): Datasource => {
  switch (action.type) {
    case GET:
      return { ...state, ...{ isLoading: true, loaded: false } };
    case GET_SUCCESS:
      return { ...state, ...{ isLoading: false, loaded: true, payload: action.payload }}
    case UPDATE:
      return { ...state, ...{ isLoading: true, loaded: false } };
    case UPDATE_SUCCESS:
      return { ...state, ...{ isLoading: false, loaded: true, payload: action.payload }}
    case ADD:
      return { ...state, ...{ isLoading: true, loaded: false } };
    case ADD_SUCCESS:
      return { ...state, ...{ isLoading: false, loaded: true, payload: action.payload }}
    case REMOVE:
      return { ...state, ...{ isLoading: true, loaded: false } };
    case REMOVE_SUCCESS:
      return { ...state, ...{ isLoading: false, loaded: true, payload: null }}
    default:
      return state;
  }
}
