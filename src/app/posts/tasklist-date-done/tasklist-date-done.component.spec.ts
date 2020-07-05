import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistDateDoneComponent } from './tasklist-date-done.component';

describe('TasklistDateDoneComponent', () => {
  let component: TasklistDateDoneComponent;
  let fixture: ComponentFixture<TasklistDateDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasklistDateDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasklistDateDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
