import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenciasHolapapComponent } from './preferencias-holapap.component';

describe('PreferenciasHolapapComponent', () => {
  let component: PreferenciasHolapapComponent;
  let fixture: ComponentFixture<PreferenciasHolapapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferenciasHolapapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferenciasHolapapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
