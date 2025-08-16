import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModal } from './shared-modal';

describe('SharedModal', () => {
  let component: SharedModal;
  let fixture: ComponentFixture<SharedModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
