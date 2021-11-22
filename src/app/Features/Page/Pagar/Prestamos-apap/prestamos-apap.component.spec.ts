import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamosApapComponent } from './prestamos-apap.component';

describe('PrestamosApapComponent', () => {
  let component: PrestamosApapComponent;
  let fixture: ComponentFixture<PrestamosApapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestamosApapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamosApapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
