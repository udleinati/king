import { Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  closeResult: string;
  type: string;

  constructor(
    public activeModal: NgbActiveModal,
  ) {
  }

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirm() {
    this.activeModal.close('confirm');
  }

  ngOnInit() {

  }
}
