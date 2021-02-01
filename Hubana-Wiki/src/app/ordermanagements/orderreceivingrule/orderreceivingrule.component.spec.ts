import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderreceivingruleComponent } from './orderreceivingrule.component';

describe('OrderreceivingruleComponent', () => {
  let component: OrderreceivingruleComponent;
  let fixture: ComponentFixture<OrderreceivingruleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderreceivingruleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderreceivingruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
