import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoyDigitalComponent } from './soy-digital.component';

describe('SoyDigitalComponent', () => {
  let component: SoyDigitalComponent;
  let fixture: ComponentFixture<SoyDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoyDigitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoyDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
