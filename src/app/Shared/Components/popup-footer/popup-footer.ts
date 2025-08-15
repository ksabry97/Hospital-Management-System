import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup-footer',
  imports: [],
  templateUrl: './popup-footer.html',
  styleUrl: './popup-footer.scss',
})
export class PopupFooter {
  @Input() submitText!: string;

  @Output() submit = new EventEmitter();
  @Output() cancel = new EventEmitter();

  submitButton() {
    this.submit.emit(true);
  }
  cancelButton() {
    this.cancel.emit(true);
  }
}
