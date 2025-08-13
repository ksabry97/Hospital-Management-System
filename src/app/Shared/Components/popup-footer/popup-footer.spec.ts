import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupFooter } from './popup-footer';

describe('PopupFooter', () => {
  let component: PopupFooter;
  let fixture: ComponentFixture<PopupFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
