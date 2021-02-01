import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnrequestruleComponent } from './returnrequestrule.component';

describe('ReturnrequestruleComponent', () => {
  let component: ReturnrequestruleComponent;
  let fixture: ComponentFixture<ReturnrequestruleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnrequestruleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnrequestruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
