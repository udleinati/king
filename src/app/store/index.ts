import * as fromService from './service';
import * as fromRoute from './route';

export const reducers = {
  services: fromService.services,
  service: fromService.service,

  routes: fromRoute.routes,
}

export const effects = [
  fromService.Effects,
  fromRoute.Effects,
]
