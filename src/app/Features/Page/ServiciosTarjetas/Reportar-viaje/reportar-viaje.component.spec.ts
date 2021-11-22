import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportarViajeComponent } from './reportar-viaje.component';

describe('ReportarViajeComponent', () => {
  let component: ReportarViajeComponent;
  let fixture: ComponentFixture<ReportarViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportarViajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportarViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
