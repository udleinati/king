import { ChangeDetectionStrategy, Component, Input, ViewChild, Output, EventEmitter, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions } from '@ngrx/effects';

export interface PageDropEvent {
  action: string;
  previousIndex?: number;
  currentIndex?: number;
}

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  host: { class: 'page-layout carded' },
})
export class PageListComponent implements OnInit {
  @Input() displayedColumns: string[] = [];
  @Input() listState: any;
  @Input() objectName = 'undefined';
  @Input() headerTitle = 'Undefined';
  @Input() headerIcon: string = null;
  @Input() hideSearch = false;
  @Input() hideAdd = false;
  @Input() hidePagination = false;
  @Input() hideDragAndDrop = false;

  @Input() pageDropEmitter: EventEmitter<PageDropEvent> = new EventEmitter<PageDropEvent>();

  // public pageEvent: PageEvent;
  // public displayReorder = false;

  constructor(
    protected router: Router,
    protected store: Store,
    private actions$: Actions,
  ) {}

  // getDisplayedColumns(): string[] {
  //   return this.displayedColumns.filter(e => (e === 'position' && this.displayReorder === true || e !== 'position'));
  // }

  // getListState() {
  //   return {
  //     meta: this.listState.meta,
  //     data: this.listState.data.filter(e => {
  //       return (this.displayReorder === false || (this.displayReorder === true && (e.attributes.level === 1 || !e.attributes.level)));
  //     })
  //   };
  // }

  // getServerData(event?: PageEvent) {
  //   this.router.navigate([], {
  //     queryParams: {
  //       page: Number(event.pageIndex + 1) || 1,
  //       size: (Number(event.pageSize) !== 100) ? Number(event.pageSize) : undefined
  //     }
  //   });

  //   return event;
  // }

  // emitDropEvent(event: CdkDragDrop<any[]>) {
  //   this.pageDropEmitter.emit({
  //     action: 'drop',
  //     previousIndex: event.previousIndex,
  //     currentIndex: event.currentIndex
  //   });
  // }

  // counter(i: number) {
  //   return new Array(i);
  // }

  ngOnInit() {
  //   this.pageDropEmitter.subscribe(e => {
  //     if (e.action !== 'refresh') { return; }
  //     this.table.renderRows();
  //   });
  }

  // toggleDisplayReorder() {
  //   if (this.displayReorder === true) {
  //     this.displayReorder = false;
  //   } else {
  //     this.displayReorder = true;
  //   }
  // }
}
