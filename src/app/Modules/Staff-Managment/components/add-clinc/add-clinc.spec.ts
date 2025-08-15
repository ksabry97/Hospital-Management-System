import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClinc } from './add-clinc';

describe('AddClinc', () => {
  let component: AddClinc;
  let fixture: ComponentFixture<AddClinc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddClinc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClinc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
