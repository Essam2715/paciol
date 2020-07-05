import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateNotDoneComponent } from './date-not-done.component';

describe('DateNotDoneComponent', () => {
  let component: DateNotDoneComponent;
  let fixture: ComponentFixture<DateNotDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateNotDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateNotDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
