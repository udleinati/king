import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { ModalComponent } from '../modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
})
export class PageListComponent implements OnInit {
  @Input() headline: string;
  @Input() columns: string[] = [];
  @Input() columnActions: string[] = [];
  @Input() list: any;
  @Input() classes: string = '';
  @Input() fromStore: any;
  @Input() deleteMessage: string = 'You are about to delete <strong>{{name}}</strong>';

  constructor(
    protected router: Router,
    protected store: Store,
    protected actions$: Actions,
    protected modalService: NgbModal,
  ) {}

  ngOnInit() {
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
