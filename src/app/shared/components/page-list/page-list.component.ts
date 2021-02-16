import { Component, Input, OnInit } from '@angular/core';
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

  constructor(
    protected router: Router,
    protected store: Store,
    private actions$: Actions,
  ) {}

  ngOnInit() {
  }
}
