import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideaccordionComponent } from './sideaccordion.component';

describe('SideaccordionComponent', () => {
  let component: SideaccordionComponent;
  let fixture: ComponentFixture<SideaccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideaccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideaccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
