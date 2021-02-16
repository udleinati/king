import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { KongService } from 'src/app/shared/services/kong.service';

@Injectable()
export class ServicePageRouteListResolve implements Resolve<Record<string, any>> {
  constructor(
    private readonly kongService: KongService
  ) {}

  resolve(): Observable<any> {
    return this.kongService.serviceRoutes('27efc991-1058-44fb-b17d-584a47031bec');
  }
}
