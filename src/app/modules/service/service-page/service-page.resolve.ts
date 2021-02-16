import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { sidebarInsideService } from 'src/app/shared/services/sidebar-inside.service';
import * as fromService from 'src/app/store/service';

@Injectable()
export class ServicePageResolve implements Resolve<Record<string, any>> {
  constructor(
    private store: Store,
    private readonly sidebarInsideService: sidebarInsideService,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    if (!route.params.id) {
      this.sidebarInsideService.routes = [
        { path: '/services/new', title: 'Service',  icon:'ni-single-02 text-yellow', class: '' },
      ];

      return of(null)
    }

    else {
      this.sidebarInsideService.routes = [
        { path: `/services/${route.params.id}`, title: 'Service',  icon:'ni-single-02', class: '' },
        { path: `/services/${route.params.id}/routes`, title: 'Routes',  icon:'ni-world-2', class: '' },
      ];

      this.store.dispatch(new fromService.Get(route.params.id))

      return this.store.pipe(
        select(fromService.getServiceState),
        filter(state => !state.isLoading && state.loaded),
        take(1)
      )
    }
  }
}
