import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { KongService } from 'src/app/services/kong.service';
import { map } from "rxjs/operators";
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  providers:[ModalComponent],
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
})
export class ServicePageComponent implements OnInit {
  routes: Record<string, any>[];

  serviceForm = this.fb.group({
    id: [undefined],
    name: [null, Validators.required],
    tags: [undefined],
    host: [null, Validators.required],
    port: [null, Validators.required],
    path: [undefined],
    retries: [undefined],
    connectTimeout: [undefined],
    writeTimeout: [undefined],
    readTimeout: [undefined],
    clientCertificate: [undefined],
  })

  service$ = this.activatedRoute.data.pipe(
    map((data) => data.service)
  );

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private readonly kongService: KongService
  ) { }

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id || 'new';

    this.routes = [
      { routerLink: [`/services/${id}`], title: 'Service Detail',  icon:'ni-single-02 text-yellow', class: '' },
      { routerLink: [`/services/${id}/routes`], title: 'Routes',  icon:'ni-world-2', class: '' },
    ]

    this.service$.subscribe(e => {
      if (!e) return;

      this.serviceForm.setValue({
        id: e.id,
        name: e.name,
        tags: e.tags,
        host: e.host,
        port: e.port,
        path: e.path,
        retries: e.retries,
        connectTimeout: e.connectTimeout,
        writeTimeout: e.writeTimeout,
        readTimeout: e.readTimeout,
        clientCertificate: e.clientCertificate,
      })
    })
  }

  onSubmit() {
    const value = this.serviceForm.value;
    if (!value.clientCertificate) value.clientCertificate = null;

    let obs;

    if (value.id) {
      obs = this.kongService.patchService(value.id, value);
    } else {
      obs = this.kongService.addService(value)
    }

    obs.subscribe((e: Record<string, any>) => {
      this.router.navigate(['services', e.id], { queryParams: { ...this.activatedRoute.snapshot.queryParams, _: Date.now() } });
    },
    error => {
      console.error(error)
    })
  }
}
