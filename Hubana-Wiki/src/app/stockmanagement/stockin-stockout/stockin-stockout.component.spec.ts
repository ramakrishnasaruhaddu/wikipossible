import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockinStockoutComponent } from './stockin-stockout.component';

describe('StockinStockoutComponent', () => {
  let component: StockinStockoutComponent;
  let fixture: ComponentFixture<StockinStockoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockinStockoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockinStockoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
