import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { KongService } from 'src/app/services/kong.service';
import { sidebarInsideService } from 'src/app/services/sidebar-inside.service';

@Injectable()
export class ServicePageResolve implements Resolve<Record<string, any>> {
  constructor(
    private readonly kongService: KongService,
    private readonly sidebarInsideService: sidebarInsideService,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {

    if (!route.params.id) {
      this.sidebarInsideService.routes = [
        { path: '/services/new', title: 'Service Detail',  icon:'ni-single-02 text-yellow', class: '' },
      ];

      return of(null);
    }

    console.log('xxxx');
    this.sidebarInsideService.routes = [
      { path: `/services/${route.params.id}`, title: 'Service Detail',  icon:'ni-single-02', class: '' },
      { path: `/services/${route.params.id}/routes`, title: 'Routes',  icon:'ni-world-2', class: '' },
    ];

    return this.kongService.service(route.params.id);
  }
}
