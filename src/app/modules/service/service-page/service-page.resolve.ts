import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { BarService } from 'src/app/shared/services/bar.service';
import * as fromService from 'src/app/store/service';

@Injectable()
export class ServicePageResolve implements Resolve<Record<string, any>>  {
  constructor(
    private store: Store,
    private readonly barService: BarService,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let obs = of(null);

    if (route.params.id) {
      this.store.dispatch(new fromService.Get(route.params.id))

      obs = this.store.pipe(
        select(fromService.getServiceState),
        filter(state => !state.isLoading && state.loaded),
        take(1)
      )
    }

    return obs.pipe(
      tap(e => {
        const basePath = '/services'
        this.barService.reset();
        this.barService.title = { title: 'Services', path: basePath }
        this.barService.backToPath = basePath;
        this.barService.topButton = { title: 'Add new service', path: `${basePath}/new` }

        if (e) {
          this.barService.sidebarInternal = [
            { path: `${basePath}/${route.params.id}`, title: 'Service',  icon:'ni-single-02', class: '' },
            { path: `${basePath}/${route.params.id}/routes`, title: 'Routes',  icon:'ni-world-2', class: '' },
          ];

          if (route.params.routeId)
            this.barService.sidebarInternal.push({
              path: `${basePath}/${route.params.id}/routes/${route.params.routeId}`, title: 'Route',  icon:'ni-world-2', class: ''
            })
        }

        else {
          this.barService.sidebarInternal = [
            { path: `${basePath}/new`, title: 'Service',  icon:'ni-single-02 text-yellow', class: '' },
          ];
        }
      }),
    )
  }
}
