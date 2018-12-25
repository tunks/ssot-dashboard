import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatetimesliderComponent } from './datetimeslider.component';

describe('DatetimesliderComponent', () => {
  let component: DatetimesliderComponent;
  let fixture: ComponentFixture<DatetimesliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatetimesliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatetimesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
