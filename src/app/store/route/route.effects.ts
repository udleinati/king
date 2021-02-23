import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, switchMap, tap } from "rxjs/operators";
import { EMPTY } from 'rxjs';
import { Get, GET, GetSuccess, List, LIST, ListSuccess } from "./route.actions";
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { KongService } from 'src/app/shared/services/kong.service';

@Injectable()
export class Effects {
  constructor(
    private store: Store,
    private actions$: Actions,
    private kongService: KongService,
  ) {}

  list$ = createEffect(() => this.actions$.pipe(
    ofType<List>(LIST),
    mergeMap((action) => this.kongService.routes(action.serviceId)),
    tap(payload => this.store.dispatch(new ListSuccess(payload))),
    switchMap(() => EMPTY)
  ), { dispatch: false });

  get$ = createEffect(() => this.actions$.pipe(
    ofType<Get>(GET),
    mergeMap((action) => this.kongService.route(action.id)),
    tap(payload => this.store.dispatch(new GetSuccess(payload))),
    switchMap(() => EMPTY)
  ), { dispatch: false });

  // update$ = createEffect(() => this.actions$.pipe(
  //   ofType<any>(UPDATE),
  //   mergeMap((action) => this.kongService.patchRoute(action.id, action.payload)),
  //   tap(payload => this.store.dispatch(new UpdateSuccess(payload))),
  //   switchMap(() => EMPTY)
  // ), { dispatch: false });

  // add$ = createEffect(() => this.actions$.pipe(
  //   ofType<Add>(ADD),
  //   mergeMap((action) => this.kongService.addRoute(action.payload)),
  //   tap(payload => this.store.dispatch(new AddSuccess(payload))),
  //   switchMap(() => EMPTY)
  // ), { dispatch: false });

  // remove$ = createEffect(() => this.actions$.pipe(
  //   ofType<Remove>(REMOVE),
  //   mergeMap((action) => this.kongService.removeRoute(action.id)),
  //   tap(() => this.store.dispatch(new RemoveSuccess())),
  //   switchMap(() => EMPTY)
  // ), { dispatch: false });
}
