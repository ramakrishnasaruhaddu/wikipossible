import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APIListComponent } from './apilist.component';

describe('APIListComponent', () => {
  let component: APIListComponent;
  let fixture: ComponentFixture<APIListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APIListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APIListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
