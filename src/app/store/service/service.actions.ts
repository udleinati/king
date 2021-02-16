import { Action } from '@ngrx/store';

export const LIST = '[Service] List';
export const LIST_SUCCESS = '[Service] List Success';

export const GET = '[Service] Get';
export const GET_SUCCESS = '[Service] Get Success';

export const ADD = '[Service] Add';
export const ADD_SUCCESS = '[Service] Add Success';

export const REMOVE = '[Service] Remove';
export const REMOVE_SUCCESS = '[Service] Remove Success';

export const UPDATE = '[Service] Update';
export const UPDATE_SUCCESS = '[Service] Update Success';

export class List implements Action {
  readonly type = LIST;
}

export class ListSuccess implements Action {
  readonly type = LIST_SUCCESS;
  constructor(public payload: Record<string, any>) {}
}

export class Get implements Action {
  readonly type = GET;
  constructor(public id: string) {}
}

export class GetSuccess implements Action {
  readonly type = GET_SUCCESS;
  constructor(public payload: Record<string, any>) {}
}

export class Add implements Action {
  readonly type = ADD;
  constructor(public payload: Record<string, any>) {}
}

export class AddSuccess implements Action {
  readonly type = ADD_SUCCESS;
  constructor(public payload: Record<string, any>) {}
}

export class Update implements Action {
  readonly type = UPDATE;
  constructor(public id: string, public payload: Record<string, any>) {}
}

export class UpdateSuccess implements Action {
  readonly type = UPDATE_SUCCESS;
  constructor(public payload: Record<string, any>) {}
}

export class Remove implements Action {
  readonly type = REMOVE;
  constructor(public id: string) {}
}

export class RemoveSuccess implements Action {
  readonly type = REMOVE_SUCCESS;
}

export type Actions =
  List | ListSuccess |
  Get | GetSuccess |
  Add | AddSuccess |
  Update | UpdateSuccess |
  Remove | RemoveSuccess;
