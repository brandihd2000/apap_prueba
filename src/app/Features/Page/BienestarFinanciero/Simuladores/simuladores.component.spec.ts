import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladoresComponent } from './simuladores.component';

describe('SimuladoresComponent', () => {
  let component: SimuladoresComponent;
  let fixture: ComponentFixture<SimuladoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimuladoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimuladoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
