import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { take, filter, map, takeUntil } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})

// tslint:disable-next-line: component-class-suffix
export class PageContentExtend implements OnInit, OnDestroy {
  // public formState$: Observable<FormGroupState<any>>;
  // protected submittedValue$: Observable<any>;

  // public formReducer: any;
  // public deleteTextMessage = `You are about to delete: {{name}}.`;
  // public tabIndex = 0;

  // tslint:disable-next-line: variable-name
  protected _unsubscribeAll: Subject<any>;

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected router: Router,
    protected store: Store,
    protected actions$: Actions,
    protected fb: FormBuilder,
  ) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
  //   // Prepare ngrx-forms
  //   this.reset();
  //   this.formState$ = this.store.pipe(select(s => s[this.formReducer.formId].formState));
  //   this.submittedValue$ = this.store.pipe(select(s => s[this.formReducer.formId].submittedValue));

  //   const subFragment = this.route.fragment.subscribe(fragment => {
  //     if (fragment) {
  //       const match = fragment.match(/^tab-([0-9]+)$/);
  //       if (match) { this.tabIndex = Number(match[1]) - 1; }
  //     }

  //     setTimeout(() => { subFragment.unsubscribe(); });
  //   });
  }

  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  onSubmit() {
  //   // 1. validate and submit formState
  //   this.formState$.pipe(
  //     takeUntil(this._unsubscribeAll),
  //     take(1),
  //     filter(s => s.isValid),
  //     map(fs => {
  //       return new this.formReducer.SetSubmittedValueAction(fs.value);
  //     })
  //   ).subscribe(this.store);
  }

  // reset() {
  //   if (!this.formReducer || !this.formReducer.INITIAL_STATE || !this.formReducer.INITIAL_STATE.id) { return; }

  //   this.store.dispatch(new SetValueAction(this.formReducer.INITIAL_STATE.id, this.formReducer.INITIAL_STATE.value));
  //   this.store.dispatch(new ResetAction(this.formReducer.INITIAL_STATE.id));
  //   this.store.dispatch(new this.formReducer.SetSubmittedValueAction(null));
  // }

  // counter(i: number) {
  //   return new Array(i);
  // }

  // tabChange(index) {
  //   this.router.navigate([], {
  //     fragment: `tab-${index + 1}`
  //   });
  // }
}
