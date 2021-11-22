import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloquearTarjetaComponent } from './bloquear-tarjeta.component';

describe('BloquearTarjetaComponent', () => {
  let component: BloquearTarjetaComponent;
  let fixture: ComponentFixture<BloquearTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloquearTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloquearTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
