import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivarTarjetaComponent } from './activar-tarjeta.component';

describe('ActivarTarjetaComponent', () => {
  let component: ActivarTarjetaComponent;
  let fixture: ComponentFixture<ActivarTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivarTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivarTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
