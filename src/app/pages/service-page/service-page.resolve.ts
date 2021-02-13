import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { KongService } from 'src/app/services/kong.service';

@Injectable()
export class ServicePageResolve implements Resolve<Record<string, any>> {
  constructor(
    private readonly kongService: KongService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    if (!route.params.id) return of(null);
    return this.kongService.service(route.params.id);
  }
}
