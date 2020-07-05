import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistDateInProgressComponent } from './tasklist-date-in-progress.component';

describe('TasklistDateInProgressComponent', () => {
  let component: TasklistDateInProgressComponent;
  let fixture: ComponentFixture<TasklistDateInProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasklistDateInProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasklistDateInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
