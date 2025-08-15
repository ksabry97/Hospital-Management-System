import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-popup-header',
  imports: [NzIconModule],
  templateUrl: './popup-header.html',
  styleUrl: './popup-header.scss',
})
export class PopupHeader {
  @Input() icon: any;
  @Input() title: any;
  @Input() description: any;
  @Output() closePopup = new EventEmitter();

  close() {
    this.closePopup.emit(true);
  }
}
