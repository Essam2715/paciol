import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPostComponent } from './basic-post.component';

describe('BasicPostComponent', () => {
  let component: BasicPostComponent;
  let fixture: ComponentFixture<BasicPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
