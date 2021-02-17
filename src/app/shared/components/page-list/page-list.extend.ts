import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-page-list',
  template: '',
})

// tslint:disable-next-line: component-class-suffix
export class PageListExtend implements OnInit, OnDestroy {
  // tslint:disable-next-line: variable-name
  protected _unsubscribeAll: Subject<any>;
  protected fromStore: any;
  protected deleteMessage: string = 'You are about to delete <strong>{{name}}</strong>'

  constructor(
    protected store: Store,
    protected actions$: Actions,
    protected modalService: NgbModal,
  ) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {}

  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
