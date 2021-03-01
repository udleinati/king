import { Component, OnInit } from '@angular/core';
import { select } from '@ngrx/store';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { PageListExtend } from 'src/app/shared/components/page-list/page-list.extend';
import * as fromRoute from 'src/app/store/route';
import * as fromService from 'src/app/store/service';

@Component({
  providers:[ModalComponent],
  selector: 'app-service-page-route-list',
  templateUrl: './service-page-route-list.component.html',
})
export class ServicePageRouteListComponent extends PageListExtend implements OnInit {
  public service$ = this.store.pipe(select(fromService.getServicePayload));
  public list$ = this.store.pipe(select(fromRoute.getRoutesPayload));

  public columns: string[] = ['name', 'hosts', 'paths', 'tags'];
  public columnActions: string[] = ['delete'];
}
