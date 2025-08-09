import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TextInput } from '../text-input/text-input';
import { PasswordInput } from '../password-input/password-input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login-page',
  imports: [
    NzIconModule,
    TextInput,
    PasswordInput,
    NzButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  loginForm!: FormGroup;
  constructor(private readonly fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(e: Event) {
    e.preventDefault();
    console.log(this.loginForm.value);
  }
}
