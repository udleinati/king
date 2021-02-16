import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import * as fromService from 'src/app/store/service';

@Injectable()
export class ServiceListResolve implements Resolve<Record<string, any>> {
  constructor(private store: Store) {}

  resolve(): Observable<any> {
    this.store.dispatch(new fromService.List())

    return this.store.pipe(
      select(fromService.getServicesState),
      filter(state => !state.isLoading && state.loaded),
      take(1)
    )
  }
}
