import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagarFacturasComponent } from './pagar-facturas.component';

describe('PagarFacturasComponent', () => {
  let component: PagarFacturasComponent;
  let fixture: ComponentFixture<PagarFacturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagarFacturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagarFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
