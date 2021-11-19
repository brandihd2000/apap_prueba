import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiarioAPAPComponent } from './beneficiario-apap.component';

describe('BeneficiarioAPAPComponent', () => {
  let component: BeneficiarioAPAPComponent;
  let fixture: ComponentFixture<BeneficiarioAPAPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiarioAPAPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiarioAPAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
