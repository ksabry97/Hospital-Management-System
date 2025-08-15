import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'app-status',
  imports: [NzIconModule, NzSwitchModule, ReactiveFormsModule, CommonModule],
  templateUrl: './status.html',
  styleUrl: './status.scss',
})
export class Status {
  @Input() controlName!: string;
  @Input() parentGroup!: FormGroup;
  @Input() label: string = '';
  @Input() content: string = '';
  @Input() disabled: boolean = false;

  get control() {
    return this.parentGroup.get(this.controlName) as FormControl;
  }
}
