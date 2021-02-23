import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { BarService } from 'src/app/shared/services/bar.service';
import * as fromRoutes from 'src/app/store/route';

@Injectable()
export class RouteListResolve implements Resolve<Record<string, any>> {
  constructor(
    private store: Store,
    private readonly barService: BarService,
  ) {}

  resolve(): Observable<any> {
    this.store.dispatch(new fromRoutes.List())

    return this.store.pipe(
      select(fromRoutes.getRoutesState),
      filter(state => !state.isLoading && state.loaded),
      take(1),
      tap(e => {
        const basePath = '/routes'
        this.barService.reset();
        this.barService.title = { title: 'Routes', path: basePath }
        this.barService.topButton = { title: 'Add new route', path: `${basePath}/new` }
      }),
    )
  }
}
