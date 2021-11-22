import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarPropositoProductosComponent } from './asignar-proposito-productos.component';

describe('AsignarPropositoProductosComponent', () => {
  let component: AsignarPropositoProductosComponent;
  let fixture: ComponentFixture<AsignarPropositoProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarPropositoProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarPropositoProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
