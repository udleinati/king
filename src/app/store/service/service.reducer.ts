import { Datasource } from 'src/app/types/datasource.type';
import { Actions } from './service.actions';

export const initialState: Datasource = new Datasource();

export const reducer = (
  state = initialState,
  action: Actions
): Datasource => {
  console.log('xxxxx')
  return state;
}

export const getPayload = (state: Datasource) => state.payload;
