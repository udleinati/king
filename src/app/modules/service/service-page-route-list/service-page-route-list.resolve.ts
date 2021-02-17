import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import * as fromRoute from 'src/app/store/route';

@Injectable()
export class ServicePageRouteListResolve implements Resolve<Record<string, any>> {
  constructor(private store: Store) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.store.dispatch(new fromRoute.List(route.params.id))

    return this.store.pipe(
      select(fromRoute.getRoutesState),
      filter(state => !state.isLoading && state.loaded),
      take(1)
    )
  }
}
