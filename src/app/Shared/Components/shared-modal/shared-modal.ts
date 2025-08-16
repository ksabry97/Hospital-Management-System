import { CommonModule, NgComponentOutlet } from '@angular/common';
import {
  Component,
  ComponentRef,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NzModalComponent, NzModalModule } from 'ng-zorro-antd/modal';
import { AddClinc } from '../../../Modules/Staff-Managment/components/add-clinc/add-clinc';

@Component({
  selector: 'app-shared-modal',
  imports: [CommonModule, NzModalModule],
  templateUrl: './shared-modal.html',
  styleUrl: './shared-modal.scss',
})
export class SharedModal {
  @Input() isVisible: boolean = false;
  @Input() modalComponent!: any;
}
