import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasApapComponent } from './tarjetas-apap.component';

describe('TarjetasApapComponent', () => {
  let component: TarjetasApapComponent;
  let fixture: ComponentFixture<TarjetasApapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetasApapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetasApapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
