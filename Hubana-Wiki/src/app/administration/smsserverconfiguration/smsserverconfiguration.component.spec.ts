import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsserverconfigurationComponent } from './smsserverconfiguration.component';

describe('SmsserverconfigurationComponent', () => {
  let component: SmsserverconfigurationComponent;
  let fixture: ComponentFixture<SmsserverconfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsserverconfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsserverconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
