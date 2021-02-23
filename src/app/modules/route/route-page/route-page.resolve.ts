import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
import { BarService } from 'src/app/shared/services/bar.service';
import * as fromRoute from 'src/app/store/route';

@Injectable()
export class RoutePageResolve implements Resolve<Record<string, any>>  {
  constructor(
    private store: Store,
    private router: Router,
    private readonly barService: BarService,
  ) {}

  resolve(route: ActivatedRouteSnapshot, routex: RouterStateSnapshot): Observable<any> {
    let obs = of(null);

    if (route.params.id) {
      this.store.dispatch(new fromRoute.Get(route.params.id))

      obs = this.store.pipe(
        select(fromRoute.getRouteState),
        filter(state => !state.isLoading && state.loaded),
        take(1)
      )
    }

    return obs.pipe(
      map(e => {
        this.router.navigateByUrl(`/services/${e.payload.service.id}/routes/${e.payload.id}`);
        return e;
      })
    )
  }
}
