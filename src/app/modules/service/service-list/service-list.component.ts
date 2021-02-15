import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { KongService } from 'src/app/services/kong.service';
import { map, switchMap, tap } from "rxjs/operators";

@Component({
  providers:[ModalComponent],
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
})
export class ServiceListComponent implements OnInit {
  services$ = this.activatedRoute.data.pipe(
    map((data) => data.services)
  );
  modalRef: NgbModalRef;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private readonly kongService: KongService
  ) { }

  ngOnInit() {}

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
    modal.componentInstance.message = `You are about to delete service <strong>${content.name}</strong>`
    modal.componentInstance.confirmLabel = 'Ok, Delete!'
    modal.componentInstance.cancelLabel = 'Cancel'
    modal.componentInstance.content = content
    modal.result.then(e => {
      this.kongService.deleteService(content.id).subscribe(
        e => {
          const queryParams = this.activatedRoute.snapshot.queryParams;
          this.router.navigate(['services'], { queryParams: { ...queryParams, _: Date.now() } }).then(() => {
            this.router.navigate(['services'], { queryParams });
          });
        },
        error => {
          console.error(error)
          // this.router.navigate([], { queryParams: { ...this.activatedRoute.snapshot.queryParams, _: Date.now() } });
        })
    }, reason => {
      console.log('reason:', reason)
    })
  }
}