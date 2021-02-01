import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasyncseheduleComponent } from './datasyncsehedule.component';

describe('DatasyncseheduleComponent', () => {
  let component: DatasyncseheduleComponent;
  let fixture: ComponentFixture<DatasyncseheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasyncseheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasyncseheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
