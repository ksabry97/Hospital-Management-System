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
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login-page',
  imports: [
    NzIconModule,
    TextInput,
    PasswordInput,
    NzButtonModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  loginForm!: FormGroup;

  content = [
    {
      label: 'Patient Management',
      content: 'Comprehensive patient records and care coordination',
      color: '#e0fff2',
    },
    {
      label: 'Real-time Monitoring',
      content: 'Live patient vitals and automated alerts',
      color: '#ebfaff',
    },
    {
      label: 'Staff Coordination',
      content: 'Seamless communication between departments',
      color: '#e0fff2',
    },
    {
      label: 'Appointment Scheduling',
      content: 'Intelligent scheduling and resource management',
      color: '#ebfaff',
    },
  ];
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
