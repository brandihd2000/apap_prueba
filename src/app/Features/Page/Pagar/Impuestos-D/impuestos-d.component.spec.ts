import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpuestosDComponent } from './impuestos-d.component';

describe('ImpuestosDComponent', () => {
  let component: ImpuestosDComponent;
  let fixture: ComponentFixture<ImpuestosDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpuestosDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpuestosDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
