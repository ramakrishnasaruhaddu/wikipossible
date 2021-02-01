import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulfillnodesetupComponent } from './fulfillnodesetup.component';

describe('FulfillnodesetupComponent', () => {
  let component: FulfillnodesetupComponent;
  let fixture: ComponentFixture<FulfillnodesetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulfillnodesetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulfillnodesetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
