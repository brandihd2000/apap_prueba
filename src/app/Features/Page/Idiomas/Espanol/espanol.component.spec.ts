import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspanolComponent } from './espanol.component';

describe('EspanolComponent', () => {
  let component: EspanolComponent;
  let fixture: ComponentFixture<EspanolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspanolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspanolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
