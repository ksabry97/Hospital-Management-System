import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ErrorMessages } from '../../Core/Services/error-messages.service';
@Component({
  selector: 'app-password-input',
  imports: [NzIconModule, NzInputModule, CommonModule, ReactiveFormsModule],
  templateUrl: './password-input.html',
  styleUrl: './password-input.scss',
})
export class PasswordInput {
  passwordVisible = false;

  @Input() controlName!: string;
  @Input() parentGroup!: FormGroup;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;

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
