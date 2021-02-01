import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentrecostatementofaccountComponent } from './paymentrecostatementofaccount.component';

describe('PaymentrecostatementofaccountComponent', () => {
  let component: PaymentrecostatementofaccountComponent;
  let fixture: ComponentFixture<PaymentrecostatementofaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentrecostatementofaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentrecostatementofaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
