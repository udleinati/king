import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { BarService } from 'src/app/shared/services/bar.service';
import * as fromRoute from 'src/app/store/route';

@Injectable()
export class ServicePageRoutePageResolve implements Resolve<Record<string, any>>  {
  constructor(
    private store: Store,
    private readonly barService: BarService,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let obs = of(null);

    if (route.params.id) {
      this.store.dispatch(new fromRoute.Get(route.params.routeId))

      obs = this.store.pipe(
        select(fromRoute.getRouteState),
        filter(state => !state.isLoading && state.loaded),
        take(1)
      )
    }

    return obs.pipe(
      tap(e => console.log(e)),
      // tap(e => {
      //   const basePath = '/services'
      //   this.barService.reset();
      //   this.barService.title = { title: 'Services', path: basePath }
      //   this.barService.backToPath = basePath;
      //   this.barService.topButton = { title: 'Add new service', path: `${basePath}/new` }

      //   if (e) {
      //     this.barService.sidebarInternal = [
      //       { path: `${basePath}/${route.params.id}`, title: 'Service',  icon:'ni-single-02', class: '' },
      //       { path: `${basePath}/${route.params.id}/routes`, title: 'Routes',  icon:'ni-world-2', class: '' },
      //     ];
      //   }

      //   else {
      //     this.barService.sidebarInternal = [
      //       { path: `${basePath}/new`, title: 'Service',  icon:'ni-single-02 text-yellow', class: '' },
      //     ];
      //   }
      // }),
    )
  }
}
