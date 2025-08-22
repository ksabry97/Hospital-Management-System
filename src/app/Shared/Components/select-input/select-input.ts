import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ErrorMessages } from '../../Core/Services/error-messages.service';
interface SmartOption {
  text: string;
  value: string;
}
@Component({
  selector: 'app-select-input',
  imports: [CommonModule, ReactiveFormsModule, NzSelectModule],
  templateUrl: './select-input.html',
  styleUrl: './select-input.scss',
})
export class SelectInput {
  @Input() controlName!: string;
  @Input() parentGroup!: FormGroup;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() options: SmartOption[] = [];
  @Input() mode: 'multiple' | 'tags' | 'default' = 'default';
  @Input() allowClear: boolean = false;
  constructor(private readonly errorMessagesServ: ErrorMessages) {}
  get control() {
    return this.parentGroup.get(this.controlName) as FormControl;
  }
  get errorMessage() {
    return this.errorMessagesServ.getErrorMessages(
      this.parentGroup,
      this.controlName,
      this.label
    );
  }
}
