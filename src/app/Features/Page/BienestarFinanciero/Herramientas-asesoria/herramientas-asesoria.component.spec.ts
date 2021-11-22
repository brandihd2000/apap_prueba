import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerramientasAsesoriaComponent } from './herramientas-asesoria.component';

describe('HerramientasAsesoriaComponent', () => {
  let component: HerramientasAsesoriaComponent;
  let fixture: ComponentFixture<HerramientasAsesoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerramientasAsesoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerramientasAsesoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
