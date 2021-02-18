import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as camelCase from 'camelcase-object-deep';
import * as snakeCase from 'snakecase-keys';
import { map } from 'rxjs/operators';

@Injectable()
export class KongService {
  urlBase: string = 'http://localhost:8001'

  constructor(private readonly httpClient: HttpClient) {}

  node() {
    return this.httpClient.get(this.urlBase, { responseType: 'json' }).pipe(
      map(e => camelCase(e, { deep: true }))
    )
  }

  services() {
    return this.httpClient.get(`${this.urlBase}/services`, { responseType: 'json' }).pipe(
      map(e => camelCase(e, { deep: true }))
    )
  }

  service(id: string) {
    return this.httpClient.get(`${this.urlBase}/services/${id}`, { responseType: 'json' }).pipe(
      map(e => camelCase(e, { deep: true }))
    )
  }

  removeService(id: string) {
    return this.httpClient.delete(`${this.urlBase}/services/${id}`, { responseType: 'json' })
  }

  patchService(id: string, body: Record<string, any>) {
    return this.httpClient.patch(`${this.urlBase}/services/${id}`, snakeCase(body, { deep: true }), { responseType: 'json' }).pipe(
      map(e => camelCase(e, { deep: true }))
    )
  }

  addService(body: Record<string, any>) {
    const newBody = {}

    /* create newBody without id property */
    Object.keys(body).filter(e => !['id'].includes(e)).forEach(e => {
      if (body[e]) newBody[e] = body[e];
    });

    return this.httpClient.post(`${this.urlBase}/services`, snakeCase(newBody, { deep: true }), { responseType: 'json' }).pipe(
      map(e => camelCase(e, { deep: true }))
    )
  }

  // serviceRoutes(id: string) {
  //   return this.httpClient.get(`${this.urlBase}/services/${id}/routes`, { responseType: 'json' }).pipe(
  //     map(e => camelCase(e, { deep: true }))
  //   )
  // }

  routes(serviceId: string) {
    console.log('routes---');
    const path = (serviceId) ? `/services/${serviceId}/routes` : '/routes';

    return this.httpClient.get(`${this.urlBase}${path}`, { responseType: 'json' }).pipe(
      map(e => camelCase(e, { deep: true }))
    )
  }

  route(id: string) {
    return this.httpClient.get(`${this.urlBase}/routes/${id}`, { responseType: 'json' }).pipe(
      map(e => camelCase(e, { deep: true }))
    )
  }
}
