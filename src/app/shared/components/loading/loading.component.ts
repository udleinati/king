import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
})
export class LoadingComponent implements OnInit{
  visible: boolean = false;

  constructor(
    private loadingService: LoadingService
  ) {
  }

  ngOnInit(): void {
    this.loadingService.visible.subscribe((visible) => {
      this.visible = visible;
    });
  }
}
