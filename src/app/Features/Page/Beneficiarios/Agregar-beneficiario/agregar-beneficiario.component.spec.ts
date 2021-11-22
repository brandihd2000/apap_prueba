import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarBeneficiarioComponent } from './agregar-beneficiario.component';

describe('AgregarBeneficiarioComponent', () => {
  let component: AgregarBeneficiarioComponent;
  let fixture: ComponentFixture<AgregarBeneficiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarBeneficiarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
