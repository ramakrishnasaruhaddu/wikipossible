import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmstemplateconfigurationComponent } from './smstemplateconfiguration.component';

describe('SmstemplateconfigurationComponent', () => {
  let component: SmstemplateconfigurationComponent;
  let fixture: ComponentFixture<SmstemplateconfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmstemplateconfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmstemplateconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
