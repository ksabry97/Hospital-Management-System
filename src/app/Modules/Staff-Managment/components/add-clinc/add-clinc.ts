import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { PopupFooter } from '../../../../Shared/Components/popup-footer/popup-footer';
import { PopupHeader } from '../../../../Shared/Components/popup-header/popup-header';
import { TextInput } from '../../../../Shared/Components/text-input/text-input';

@Component({
  selector: 'app-add-clinc',
  templateUrl: './add-clinc.html',
  styleUrl: './add-clinc.scss',
  imports: [
    NzIconModule,
    PopupHeader,
    PopupFooter,
    TextInput,
    NzSelectModule,
    NzSwitchModule,
    ReactiveFormsModule,
  ],
})
export class AddClinc {
  addClinicForm!: FormGroup;

  branchTypes = [
    { label: 'Main Branch', value: 'main' },
    { label: 'Sub Branch', value: 'sub' },
  ];

  constructor(private fb: FormBuilder) {
    this.addClinicForm = this.fb.group({
      clinicName: ['', Validators.required],
      description: [''],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      whatsApp: [''],
      email: ['', Validators.required],
      clinicType: ['', Validators.required],
      active: [true],
    });
  }

  closePopup(event: any) {
    console.log('Close popup emitted', event);
  }

  submit(event: any) {
    console.log('Submit popup emitted', event);

    console.log(this.addClinicForm.value);
  }
}
