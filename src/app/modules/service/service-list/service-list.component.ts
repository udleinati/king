import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { KongService } from 'src/app/shared/services/kong.service';
import { map, switchMap, takeUntil, tap } from "rxjs/operators";
import { select, Store } from '@ngrx/store';
import * as fromService from 'src/app/store/service';
import { Actions, ofType } from '@ngrx/effects';
import { PageListExtend } from 'src/app/shared/components/page-list/page-list.extend';

@Component({
  providers:[ModalComponent],
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
})
export class ServiceListComponent extends PageListExtend implements OnInit {
  public list$ = this.store.pipe(select(fromService.getServicesPayload));
  public displayedColumns: string[] = ['name', 'host', 'tags', 'createdAt', 'updatedAt'];

  protected deleteMessage = 'You are about to delete the service <strong>{{name}}</strong>';
  protected fromStore = fromService;

  ngOnInit() {
    super.ngOnInit();

    this.actions$.pipe(
      takeUntil(this._unsubscribeAll),
      ofType<fromService.RemoveSuccess>(fromService.REMOVE_SUCCESS),
    ).subscribe(() => {
      this.store.dispatch(new fromService.List())
    })
  }
}
