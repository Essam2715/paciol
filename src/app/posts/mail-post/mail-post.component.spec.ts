import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailPostComponent } from './mail-post.component';

describe('MailPostComponent', () => {
  let component: MailPostComponent;
  let fixture: ComponentFixture<MailPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
