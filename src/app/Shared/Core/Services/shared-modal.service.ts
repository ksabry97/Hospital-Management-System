import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class sharedModalService {
  closePopup = new BehaviorSubject(false);
  submitPopup = new BehaviorSubject(false);
  // DISCUSS

  // BehaviorSubject Contains
  //    1- boolean of fire
  //    2- data of popup
  //    3- name / enum of popup

  // Maybe submitPopup Store the data of submittrd popup to show it dynamicly without calling BE

  // make this BehaviorSubject fire from the footer component but it's not recomended

  // Should we give the body shared height

  // Handle the scroll bar globally
}
