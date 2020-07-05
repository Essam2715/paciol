import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailCompaginComponent } from './mail-compagin.component';

describe('MailCompaginComponent', () => {
  let component: MailCompaginComponent;
  let fixture: ComponentFixture<MailCompaginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailCompaginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailCompaginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
