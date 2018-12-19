import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatetitleComponent } from './datetitle.component';

describe('DatetitleComponent', () => {
  let component: DatetitleComponent;
  let fixture: ComponentFixture<DatetitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatetitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatetitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
