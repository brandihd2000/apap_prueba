import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoProductoComponent } from './todo-producto.component';

describe('TodoProductoComponent', () => {
  let component: TodoProductoComponent;
  let fixture: ComponentFixture<TodoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
