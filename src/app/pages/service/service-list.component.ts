import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { KongService } from 'src/app/shared/services/kong.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
})
export class ServiceListComponent implements OnInit {
  kongServices$: Observable<Record<string, any>>;
  closeResult: string;

  constructor(
    private modalService: NgbModal,
    private readonly kongService: KongService
  ) { }

  ngOnInit() {
    this.kongServices$ = this.kongService.services();
  }

  open(content, type, modalDimension) {
    this.modalService.open(content,{ centered: true }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return  `with: ${reason}`;
    }
  }
}
