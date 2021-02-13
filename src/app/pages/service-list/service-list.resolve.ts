import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { KongService } from 'src/app/services/kong.service';

@Injectable()
export class ServiceListResolve implements Resolve<Record<string, any>> {
  constructor(
    private readonly kongService: KongService
  ) {}

  resolve(): Observable<any> {
    return this.kongService.services();
  }
}
