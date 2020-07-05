import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateExpiredComponent } from './date-expired.component';

describe('DateExpiredComponent', () => {
  let component: DateExpiredComponent;
  let fixture: ComponentFixture<DateExpiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateExpiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
