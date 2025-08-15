import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { AddClinc } from '../add-clinc/add-clinc';

@Component({
  selector: 'app-clincs',
  templateUrl: './clincs.html',
  styleUrl: './clincs.scss',
  imports: [NzButtonModule, NzModalModule, AddClinc],
})
export class Clincs {
  isVisible = false;

  @ViewChild('customHeaderTemplate') customHeaderTemplate!: TemplateRef<any>;

  constructor(private modal: NzModalService) {}

  // openModal(): void {
  //   this.modal.create({
  //     nzTitle: this.customHeaderTemplate,
  //     nzContent: AddClinc,
  //     nzClassName: 'addClincPopup',
  //   });
  // }

  // closeModal(): void {
  //   // Logic to close the modal
  // }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
