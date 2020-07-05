import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistDateNotDoneComponent } from './tasklist-date-not-done.component';

describe('TasklistDateNotDoneComponent', () => {
  let component: TasklistDateNotDoneComponent;
  let fixture: ComponentFixture<TasklistDateNotDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasklistDateNotDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasklistDateNotDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
