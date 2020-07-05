import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDoneComponent } from './date-done.component';

describe('DateDoneComponent', () => {
  let component: DateDoneComponent;
  let fixture: ComponentFixture<DateDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
