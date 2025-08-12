import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clincs } from './clincs';

describe('Clincs', () => {
  let component: Clincs;
  let fixture: ComponentFixture<Clincs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Clincs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clincs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
