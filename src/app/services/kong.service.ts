import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class KongService {
  urlBase: string = '/api/kong'

  constructor(private readonly httpClient: HttpClient) {}

  node() {
    return this.httpClient.request('GET', this.urlBase, { responseType:'json' })
  }

  services() {
    return this.httpClient.request('GET', `${this.urlBase}/services`, { responseType:'json' })
  }

  deleteService(id: string) {
    return this.httpClient.request('DELETE', `${this.urlBase}/services/${id}`, { responseType:'json' })
  }
}
