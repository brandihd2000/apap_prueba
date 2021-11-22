import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoInteligenteComponent } from './consumo-inteligente.component';

describe('ConsumoInteligenteComponent', () => {
  let component: ConsumoInteligenteComponent;
  let fixture: ComponentFixture<ConsumoInteligenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumoInteligenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumoInteligenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
