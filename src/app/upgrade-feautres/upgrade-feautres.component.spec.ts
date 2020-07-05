import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeFeautresComponent } from './upgrade-feautres.component';

describe('UpgradeFeautresComponent', () => {
  let component: UpgradeFeautresComponent;
  let fixture: ComponentFixture<UpgradeFeautresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeFeautresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeFeautresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
