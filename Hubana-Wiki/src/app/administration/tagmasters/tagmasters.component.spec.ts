import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagmastersComponent } from './tagmasters.component';

describe('TagmastersComponent', () => {
  let component: TagmastersComponent;
  let fixture: ComponentFixture<TagmastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagmastersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagmastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
