import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageContentComponent {
  @Input() headline: string;
  // @Input() formState: any;
  // @Input() objectName = 'undefined';
  // @Input() hideSave = false;
  // @Input() hideHeader = false;
  // @Input() hideNew = false;
  // @Input() image = null;

  // public name: string = null;

  // constructor(protected store: Store<IAppState>) {
  // }

  // ngOnInit() {
  //   if (!this.formState.value.id) { return; }

  //   const name = this.formState.value.name || this.formState.value.informationName ||
  //     this.formState.value.title || this.formState.value.email || this.formState.value.id;
  //   this.name = (typeof name === 'string') ? name : unbox(name);
  // }
}
