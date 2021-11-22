import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoBeneficiariosComponent } from './listado-beneficiarios.component';

describe('ListadoBeneficiariosComponent', () => {
  let component: ListadoBeneficiariosComponent;
  let fixture: ComponentFixture<ListadoBeneficiariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoBeneficiariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoBeneficiariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
