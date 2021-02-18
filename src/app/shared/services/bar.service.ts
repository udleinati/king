import { Injectable } from '@angular/core';

interface SidebarInternal {
  class: string
  path: string
  title: string
  icon: string
}

interface TopButton {
  path: string
  title: string
}

interface Title {
  title: string
  path: string
}

@Injectable()
export class BarService {
  _sidebarInternal: SidebarInternal[] = [];
  _backToPath: string;
  _topButton: TopButton;
  _title: Title

  reset(): void {
    this._sidebarInternal = null
    this._backToPath = null
    this._topButton = null
    this._title = null
  }

  set title(value: Title) {
    this._title = value;
  }

  get title(): Title {
    return this._title;
  }

  set sidebarInternal(value: SidebarInternal[]) {
    this._sidebarInternal = value;
  }

  get sidebarInternal(): SidebarInternal[] {
    return this._sidebarInternal;
  }

  set backToPath(value: string) {
    this._backToPath = value;
  }

  get backToPath(): string {
    return this._backToPath;
  }

  set topButton(value: TopButton) {
    this._topButton = value;
  }

  get topButton(): TopButton {
    return this._topButton;
  }
}
