import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasBancosComponent } from './tarjetas-bancos.component';

describe('TarjetasBancosComponent', () => {
  let component: TarjetasBancosComponent;
  let fixture: ComponentFixture<TarjetasBancosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetasBancosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetasBancosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
