import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  showModal: boolean = false;

  @Input() set ShowModal(data)
  {
     this.showModal = data;
  }

  @Input() titulo: string;
  @Input() botonModal: string;
  @Output() cerrarModalEvent= new EventEmitter();

  toggleModal(){
    this.showModal = !this.showModal;
    this.cerrarModalEvent.emit();
  }
}
