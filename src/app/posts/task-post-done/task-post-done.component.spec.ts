import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPostDoneComponent } from './task-post-done.component';

describe('TaskPostDoneComponent', () => {
  let component: TaskPostDoneComponent;
  let fixture: ComponentFixture<TaskPostDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskPostDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPostDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
