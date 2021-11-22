import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasAhorroComponent } from './metas-ahorro.component';

describe('MetasAhorroComponent', () => {
  let component: MetasAhorroComponent;
  let fixture: ComponentFixture<MetasAhorroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetasAhorroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetasAhorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
