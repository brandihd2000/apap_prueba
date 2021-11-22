import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamosOtrosBancoComponent } from './prestamos-otros-banco.component';

describe('PrestamosOtroBancoComponent', () => {
  let component: PrestamosOtrosBancoComponent;
  let fixture: ComponentFixture<PrestamosOtrosBancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestamosOtrosBancoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamosOtrosBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
