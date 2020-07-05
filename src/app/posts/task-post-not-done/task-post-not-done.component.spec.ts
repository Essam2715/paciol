import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPostNotDoneComponent } from './task-post-not-done.component';

describe('TaskPostNotDoneComponent', () => {
  let component: TaskPostNotDoneComponent;
  let fixture: ComponentFixture<TaskPostNotDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskPostNotDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPostNotDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
