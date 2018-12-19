import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryLegendComponent } from './summary-legend.component';

describe('SummaryLegendComponent', () => {
  let component: SummaryLegendComponent;
  let fixture: ComponentFixture<SummaryLegendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryLegendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
