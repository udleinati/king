import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { takeUntil, tap } from "rxjs/operators";
import { select } from '@ngrx/store';
import * as fromRoute from 'src/app/store/route';
import { ofType } from '@ngrx/effects';
import { PageListExtend } from 'src/app/shared/components/page-list/page-list.extend';

@Component({
  providers:[ModalComponent],
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
})
export class RouteListComponent extends PageListExtend implements OnInit {
  public list$ = this.store.pipe(select(fromRoute.getRoutesPayload));
  public columns: string[] = ['name', 'host', 'tags'];
  public columnActions: string[] = ['delete'];

  public deleteMessage = 'You are about to delete the route <strong>{{name}}</strong>';
  public fromStore = fromRoute;

  ngOnInit() {
    super.ngOnInit();

    this.actions$.pipe(
      takeUntil(this._unsubscribeAll),
      ofType<fromRoute.RemoveSuccess>(fromRoute.REMOVE_SUCCESS),
    ).subscribe(() => {
      this.store.dispatch(new fromRoute.List())
    })
  }
}
