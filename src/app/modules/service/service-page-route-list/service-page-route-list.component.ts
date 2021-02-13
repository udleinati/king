import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { KongService } from 'src/app/services/kong.service';
import { map } from "rxjs/operators";
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  providers:[ModalComponent],
  selector: 'app-service-page-route-list',
  templateUrl: './service-page-route-list.component.html',
})
export class ServicePageRouteListComponent implements OnInit {
  service$ = this.activatedRoute.data.pipe(
    map((data) => data.service)
  );

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {}
}
