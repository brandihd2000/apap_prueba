import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciasPendientesComponent } from './transferencias-pendientes.component';

describe('TransferenciasPendientesComponent', () => {
  let component: TransferenciasPendientesComponent;
  let fixture: ComponentFixture<TransferenciasPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferenciasPendientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferenciasPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
