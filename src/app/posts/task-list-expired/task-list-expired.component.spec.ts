import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListExpiredComponent } from './task-list-expired.component';

describe('TaskListExpiredComponent', () => {
  let component: TaskListExpiredComponent;
  let fixture: ComponentFixture<TaskListExpiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListExpiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
