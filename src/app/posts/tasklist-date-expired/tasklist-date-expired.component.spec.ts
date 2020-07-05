import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistDateExpiredComponent } from './tasklist-date-expired.component';

describe('TasklistDateExpiredComponent', () => {
  let component: TasklistDateExpiredComponent;
  let fixture: ComponentFixture<TasklistDateExpiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasklistDateExpiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasklistDateExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
