import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { KongService } from 'src/app/services/kong.service';
import * as serviceActions from 'src/app/store/service/service.actions';

@Injectable()
export class ServiceListResolve implements Resolve<Record<string, any>> {
  constructor(
    private store: Store,
    private readonly kongService: KongService
  ) {}

  resolve(): Observable<any> {
    this.store.dispatch(new serviceActions.List())
    return this.kongService.services();
  }
}