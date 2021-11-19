import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarNCFComponent } from './consultar-ncf.component';

describe('ConsultarNCFComponent', () => {
  let component: ConsultarNCFComponent;
  let fixture: ComponentFixture<ConsultarNCFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarNCFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarNCFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
