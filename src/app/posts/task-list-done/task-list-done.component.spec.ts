import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListDoneComponent } from './task-list-done.component';

describe('TaskListDoneComponent', () => {
  let component: TaskListDoneComponent;
  let fixture: ComponentFixture<TaskListDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
