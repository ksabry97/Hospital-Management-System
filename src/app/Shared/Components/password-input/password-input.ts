import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
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
      if (errors['pattern']) {
        return `Invalid format`;
      }
    }

    return null;
  }
}
