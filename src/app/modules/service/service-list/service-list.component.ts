import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { takeUntil, tap } from "rxjs/operators";
import { select } from '@ngrx/store';
import * as fromService from 'src/app/store/service';
import { ofType } from '@ngrx/effects';
import { PageListExtend } from 'src/app/shared/components/page-list/page-list.extend';

@Component({
  providers:[ModalComponent],
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
})
export class ServiceListComponent extends PageListExtend implements OnInit {
  public list$ = this.store.pipe(select(fromService.getServicesPayload));
  public columns: string[] = ['name', 'host', 'tags'];
  public columnActions: string[] = ['delete'];

  public deleteMessage = 'You are about to delete the service <strong>{{name}}</strong>';
  public fromStore = fromService;

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
