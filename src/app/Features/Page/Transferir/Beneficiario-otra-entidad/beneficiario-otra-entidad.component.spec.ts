import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiarioOtraEntidadComponent } from './beneficiario-otra-entidad.component';

describe('BeneficiarioOtraEntidadComponent', () => {
  let component: BeneficiarioOtraEntidadComponent;
  let fixture: ComponentFixture<BeneficiarioOtraEntidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiarioOtraEntidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiarioOtraEntidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
