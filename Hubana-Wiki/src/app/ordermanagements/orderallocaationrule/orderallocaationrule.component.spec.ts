import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderallocaationruleComponent } from './orderallocaationrule.component';

describe('OrderallocaationruleComponent', () => {
  let component: OrderallocaationruleComponent;
  let fixture: ComponentFixture<OrderallocaationruleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderallocaationruleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderallocaationruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
