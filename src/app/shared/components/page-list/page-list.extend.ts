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
    modal.componentInstance.message = this.deleteMessage.replace('{{name}}', content.name),
    modal.componentInstance.confirmLabel = 'Ok, Delete!'
    modal.componentInstance.cancelLabel = 'Cancel'
    modal.componentInstance.content = content
    modal.result.then(e => {
      this.store.dispatch(new this.fromStore.Remove(content.id));
    }, reason => {
      console.log('reason:', reason)
    })
  }
}
