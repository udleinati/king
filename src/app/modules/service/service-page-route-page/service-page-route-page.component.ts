import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { Validators } from '@angular/forms';
import { select } from '@ngrx/store';
import * as fromService from 'src/app/store/service';
import * as fromRoute from 'src/app/store/route';
import { ofType } from '@ngrx/effects';
import { PageContentExtend } from 'src/app/shared/components/page-content/page-content.extend';
import { takeUntil } from 'rxjs/operators';

@Component({
  providers:[ModalComponent],
  selector: 'app-service-page-route-page',
  templateUrl: './service-page-route-page.component.html',
})
export class ServicePageRoutePageComponent extends PageContentExtend implements OnInit {
  public service$ = this.store.pipe(select(fromService.getServicePayload));
  public route$ = this.store.pipe(select(fromRoute.getRoutePayload));

  pageForm = this.fb.group({
    id: [undefined],
    name: [null, Validators.required],
    tags: [undefined],
    // host: [null, Validators.required],
    // port: [null, Validators.required],
    // path: [undefined],
    // retries: [undefined],
    // connectTimeout: [undefined],
    // writeTimeout: [undefined],
    // readTimeout: [undefined],
    // clientCertificate: [undefined],
  })

  async ngOnInit() {
    super.ngOnInit();

    // this.actions$.pipe(
    //   takeUntil(this._unsubscribeAll),
    //   ofType<fromService.AddSuccess>(fromService.ADD_SUCCESS),
    // ).subscribe(action => {
    //   this.router.navigateByUrl(`/services/${action.payload.id}`)
    // })

    this.route$.subscribe((e: Record<string, any>) => {
      if (!e || !this.activatedRoute.snapshot.params.routeId) return;

      this.pageForm.setValue({
        id: e.id,
        name: e.name,
        tags: e.tags,
        // host: e.host,
        // port: e.port,
        // path: e.path,
        // retries: e.retries,
        // connectTimeout: e.connectTimeout,
        // writeTimeout: e.writeTimeout,
        // readTimeout: e.readTimeout,
        // clientCertificate: e.clientCertificate,
      })
    })
  }

  onSubmit() {
    // const value = this.pageForm.value;
    // if (!value.clientCertificate) value.clientCertificate = null;

    // if (value.id) {
    //   this.store.dispatch(new fromService.Update(value.id, value));
    // } else {
    //   this.store.dispatch(new fromService.Add(value));
    // }
  }
}
