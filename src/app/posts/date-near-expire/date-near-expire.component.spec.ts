import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateNearExpireComponent } from './date-near-expire.component';

describe('DateNearExpireComponent', () => {
  let component: DateNearExpireComponent;
  let fixture: ComponentFixture<DateNearExpireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateNearExpireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateNearExpireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
