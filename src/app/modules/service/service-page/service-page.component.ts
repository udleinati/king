import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import * as fromService from 'src/app/store/service';
import { Actions, ofType } from '@ngrx/effects';

@Component({
  providers:[ModalComponent],
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
})
export class ServicePageComponent implements OnInit {
  public service$ = this.store.pipe(select(fromService.getServicePayload));

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

  constructor(
    private store: Store,
    private actions$: Actions,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  async ngOnInit() {
    this.actions$.pipe(
      ofType<fromService.AddSuccess>(fromService.ADD_SUCCESS),
    ).subscribe(action => {
      this.router.navigateByUrl(`/services/${action.payload.id}`)
    })

    this.service$.subscribe((e: Record<string, any>) => {
      if (!this.activatedRoute.snapshot.params.id) return;
      console.log(e)

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

    if (value.id) {
      this.store.dispatch(new fromService.Update(value.id, value));
    } else {
      this.store.dispatch(new fromService.Add(value));
    }
  }
}
