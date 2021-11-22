import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvancesEfectivotcComponent } from './avances-efectivotc.component';

describe('AvancesEfectivotcComponent', () => {
  let component: AvancesEfectivotcComponent;
  let fixture: ComponentFixture<AvancesEfectivotcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvancesEfectivotcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvancesEfectivotcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
