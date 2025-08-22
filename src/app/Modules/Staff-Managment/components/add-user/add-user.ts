import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { PopupFooter } from '../../../../Shared/Components/popup-footer/popup-footer';
import { PopupHeader } from '../../../../Shared/Components/popup-header/popup-header';
import { TextInput } from '../../../../Shared/Components/text-input/text-input';
import { Status } from '../../../../Shared/Components/status/status';
import { sharedModalService } from '../../../../Shared/Core/Services/shared-modal.service';
import { SelectInput } from '../../../../Shared/Components/select-input/select-input';

@Component({
  selector: 'app-add-user',
  imports: [
    NzIconModule,
    PopupHeader,
    PopupFooter,
    TextInput,
    NzSelectModule,
    NzSwitchModule,
    ReactiveFormsModule,
    Status,
    SelectInput,
  ],
  templateUrl: './add-user.html',
  styleUrl: './add-user.scss',
})
export class AddUser {
  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private sharedModalService: sharedModalService
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      jobTitle: ['', Validators.required],
      role: ['', Validators.required],
      assignedClinc: [[], Validators.required],
      salary: [''],
      profileInfo: [''],
      active: [false],
    });
  }
  branchTypes = [
    { text: 'Main Branch', value: 'main' },
    { text: 'Sub Branch', value: 'sub' },
    { text: 'Sub Branch', value: 'sw' },
    { text: 'Sub Branch', value: 'ww' },
  ];
  closePopup(event: any) {
    console.log('Close popup emitted', event);
    this.sharedModalService.closePopup.next(true);
  }

  submit(event: any) {
    this.sharedModalService.submitPopup.next(this.userForm.value);
    console.log('Submit popup emitted', event);

    console.log(this.userForm.value);
  }
}
