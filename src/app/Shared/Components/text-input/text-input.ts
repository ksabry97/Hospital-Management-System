import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
@Component({
  selector: 'app-text-input',
  imports: [CommonModule, NzInputModule, ReactiveFormsModule],
  templateUrl: './text-input.html',
  styleUrl: './text-input.scss',
})
export class TextInput {
  @Input() controlName!: string;
  @Input() parentGroup!: FormGroup;
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;

  get control() {
    return this.parentGroup.get(this.controlName) as FormControl;
  }
  get errorMessage() {
    const control = this.parentGroup.get(this.controlName);

    if (control && control.errors) {
      const errors = control.errors;

      if (errors['required']) {
        return `${this.label} is required`;
      }

      if (errors['minlength']) {
        return `${this.label} must be at least ${errors['minlength'].requiredLength} characters long`;
      }

      if (errors['maxlength']) {
        return `${this.label} must be at most ${errors['maxlength'].requiredLength} characters long`;
      }

      if (errors['email']) {
        return `Please enter a valid email address`;
      }

      if (errors['pattern']) {
        return `Invalid format`;
      }
    }

    return null;
  }
}
