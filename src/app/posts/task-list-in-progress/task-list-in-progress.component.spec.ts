import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListInProgressComponent } from './task-list-in-progress.component';

describe('TaskListInProgressComponent', () => {
  let component: TaskListInProgressComponent;
  let fixture: ComponentFixture<TaskListInProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListInProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
