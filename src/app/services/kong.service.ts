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

  deleteService(id: string) {
    return this.httpClient.delete(`${this.urlBase}/services/${id}`, { responseType: 'json' })
  }

  patchService(id: string, body: Record<string, any>) {
    return this.httpClient.patch(`${this.urlBase}/services/${id}`, snakeCase(body, { deep: true }), { responseType: 'json' })
  }

  addService(body: Record<string, any>) {
    Object.keys(body).forEach(e => {
      if (!body[e]) delete body[e]
    })

    return this.httpClient.post(`${this.urlBase}/services`, snakeCase(body, { deep: true }), { responseType: 'json' })
  }

  serviceRoutes(id: string) {
    return this.httpClient.get(`${this.urlBase}/services/${id}/routes`, { responseType: 'json' }).pipe(
      map(e => camelCase(e, { deep: true }))
    )
  }
}
