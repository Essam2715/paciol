import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCampaginComponent } from './create-campagin.component';

describe('CreateCampaginComponent', () => {
  let component: CreateCampaginComponent;
  let fixture: ComponentFixture<CreateCampaginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCampaginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCampaginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
