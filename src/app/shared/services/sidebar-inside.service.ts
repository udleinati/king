import { Injectable } from '@angular/core';

@Injectable()
export class sidebarInsideService {
  _routes: Record<string, any>[] = []

  constructor() {
  }

  set routes(value) {
    this._routes = value;
  }

  get routes() {
    return this._routes;
  }
}
