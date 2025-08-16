import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AddClinc } from '../../components/add-clinc/add-clinc';
import { AddUser } from '../../components/add-user/add-user';
import { SharedModal } from '../../../../Shared/Components/shared-modal/shared-modal';
import { sharedModalService } from '../../../../Shared/Core/Services/shared-modal.service';

@Component({
  selector: 'app-clincs',
  templateUrl: './clincs.html',
  styleUrl: './clincs.scss',
  imports: [NzButtonModule, AddClinc, AddUser, SharedModal],
})
export class Clincs {
  isVisible = false;
  isUserVisible = false;

  addClinicComponent = AddClinc;
  addUserComponent = AddUser;

  constructor(private sharedModalService: sharedModalService) {
    this.sharedModalService.closePopup.subscribe((res) => {
      if (res) {
        this.isVisible = false;
        this.isUserVisible = false;
        this.sharedModalService.closePopup.next(false);
      }
    });

    this.sharedModalService.submitPopup.subscribe((res) => {
      if (res) {
        this.isVisible = false;
        this.isUserVisible = false;
        console.log(res);
      }
    });
  }

  showModal(): void {
    this.isVisible = true;
  }
  showUserModal(): void {
    this.isUserVisible = true;
  }
}
