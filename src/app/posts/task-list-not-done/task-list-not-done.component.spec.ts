import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListNotDoneComponent } from './task-list-not-done.component';

describe('TaskListNotDoneComponent', () => {
  let component: TaskListNotDoneComponent;
  let fixture: ComponentFixture<TaskListNotDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListNotDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListNotDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
