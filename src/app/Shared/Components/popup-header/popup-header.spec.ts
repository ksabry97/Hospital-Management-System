import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupHeader } from './popup-header';

describe('PopupHeader', () => {
  let component: PopupHeader;
  let fixture: ComponentFixture<PopupHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
