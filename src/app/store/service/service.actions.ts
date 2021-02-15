import { Action } from '@ngrx/store';

export const LIST = '[Service] List';
export const GET = '[Service] Get One';
export const CREATE = '[Service] Create';
export const DELETE = '[Service] Delete';
export const UPDATE = '[Service] Update';

export class List implements Action {
  readonly type = LIST;
  constructor() {
    console.log('abc');
  }
}

export class Get implements Action {
  readonly type = GET;
  constructor(public payload: string) {}
}

export class Create implements Action {
  readonly type = CREATE;
  constructor(public payload: Record<string, any>) {}
}

export class Update implements Action {
  readonly type = UPDATE;
  constructor(public payload: Record<string, any>) {}
}

export class Delete implements Action {
  readonly type = DELETE;
  constructor(public payload: string) {}
}

export type Actions =
  List | Get | Create | Update | Delete;
