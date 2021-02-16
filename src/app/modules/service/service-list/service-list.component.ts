import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { KongService } from 'src/app/shared/services/kong.service';
import { map, switchMap, tap } from "rxjs/operators";
import { select, Store } from '@ngrx/store';
import * as fromService from 'src/app/store/service';
import { Actions, ofType } from '@ngrx/effects';

@Component({
  providers:[ModalComponent],
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
})
export class ServiceListComponent implements OnInit {
  public services$ = this.store.pipe(select(fromService.getServicesPayload));
  modalRef: NgbModalRef;

  constructor(
    private store: Store,
    private actions$: Actions,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.actions$.pipe(
      ofType<fromService.RemoveSuccess>(fromService.REMOVE_SUCCESS),
    ).subscribe(() => {
      this.store.dispatch(new fromService.List())
    })
  }

  modalRaw(content) {
    const modal = this.modalService.open(<Component>ModalComponent, { centered: true });
    modal.componentInstance.type = 'raw'
    modal.componentInstance.title = 'RAW Result'
    modal.componentInstance.content = content
    modal.result;
  }

  modalDelete(content) {
    const modal = this.modalService.open(<Component>ModalComponent, { centered: true });
    modal.componentInstance.type = 'notification'
    modal.componentInstance.title = 'Your attention is required'
    modal.componentInstance.icon = 'ni-fat-remove'
    modal.componentInstance.message = `You are about to delete service <strong>${content.name}</strong>`
    modal.componentInstance.confirmLabel = 'Ok, Delete!'
    modal.componentInstance.cancelLabel = 'Cancel'
    modal.componentInstance.content = content
    modal.result.then(e => {
      this.store.dispatch(new fromService.Remove(content.id));
    }, reason => {
      console.log('reason:', reason)
    })
  }
}
