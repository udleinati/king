import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LoadingService {
  private _visible: BehaviorSubject<boolean>;

  constructor() {
    this._visible = new BehaviorSubject(false);
  }

  show(): void {
    this._visible.next(true);
  }

  hide(): void {
    this._visible.next(false);
  }

  get visible(): Observable<any> {
    return this._visible.asObservable();
  }
}
