import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisServiciosFacturasComponent } from './mis-servicios-facturas.component';

describe('MisServiciosFacturasComponent', () => {
  let component: MisServiciosFacturasComponent;
  let fixture: ComponentFixture<MisServiciosFacturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisServiciosFacturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisServiciosFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
